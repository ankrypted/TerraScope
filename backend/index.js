import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(readFileSync(join(__dirname, '../data/property_rates_india.json'), 'utf8'));

const BUDGET_MAP = {
  'Under ₹50L':    { min: 0,          max: 5_000_000   },
  '₹50L – ₹1Cr':  { min: 5_000_000,  max: 10_000_000  },
  '₹1Cr – ₹3Cr':  { min: 10_000_000, max: 30_000_000  },
  '₹3Cr – ₹10Cr': { min: 30_000_000, max: 100_000_000 },
  'Above ₹10Cr':   { min: 100_000_000, max: Infinity   },
};

const STD_SQFT = 500;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'TerraScope API is running' });
});

app.get('/api/search', (req, res) => {
  const { city, budget } = req.query;

  let cities = data.cities;

  if (city && city !== 'all') {
    cities = cities.filter(c => c.city.toLowerCase() === city.toLowerCase());
  }

  const range = BUDGET_MAP[budget];

  const results = cities.map(c => ({
    city: c.city,
    state: c.state,
    rateType: c.rateType,
    localities: c.localities.filter(l => {
      if (!range) return true;
      const entryPrice = l.minRate * STD_SQFT;
      return entryPrice <= range.max;
    }),
  })).filter(c => c.localities.length > 0);

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`TerraScope backend running on http://localhost:${PORT}`);
});
