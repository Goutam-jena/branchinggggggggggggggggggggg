const express = require('express');
const router = express.Router();
const products = require('../models/products'); // Assuming you have a product model or data source

router.get('/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  if (!query) {
    return res.status(400).json({ message: 'Search query is required.' });
  }

  const searchResults = products.filter(product => 
    product.name.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );

  res.status(200).json(searchResults);
});

module.exports = router;