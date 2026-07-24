const express = require('express');
const { properties } = require('./data/properties');

const app = express();
app.use(express.json());

// GET /api/properties — list all properties
app.get('/api/properties', (req, res) => {
  res.json({
    success: true,
    count: properties.length,
    properties,
  });
});

// GET /api/properties/:id — single property
app.get('/api/properties/:id', (req, res) => {
  const property = properties.find((p) => p.id === req.params.id);
  if (!property) {
    return res.status(404).json({
      success: false,
      message: `Property with ID ${req.params.id} not found`,
    });
  }
  res.json({ success: true, property });
});

// Fallback for unknown API routes
app.use('/api', (req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

const PORT = process.env.PORT || 5025;

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
