const express = require('express');
const router = express.Router();
const Palette = require('../models/Palette');
const aiService = require('../services/openaiService');

// POST /api/generate-palette
router.post('/generate-palette', async (req, res) => {
  try {
    const { mood } = req.body;

    // Validate input
    if (!mood || typeof mood !== 'string' || mood.trim().length === 0) {
      return res.status(400).json({
        error: 'Mood is required and must be a non-empty string'
      });
    }

    const trimmedMood = mood.trim();

    // Generate palette using AI service
    const colors = await aiService.generatePalette(trimmedMood);

    // Save to MongoDB
    const palette = new Palette({
      mood: trimmedMood,
      colors: colors
    });

    await palette.save();

    // Return the generated colors
    res.status(200).json({
      colors: colors
    });

  } catch (error) {
    console.error('Error generating palette:', error.message);
    
    // Handle specific error types
    if (error.message.includes('AI Service Error') || error.message.includes('Failed to generate palette')) {
      return res.status(500).json({
        error: 'Failed to generate palette. Please try again later.'
      });
    }

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        error: 'Invalid data format'
      });
    }

    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// GET /api/palettes (optional - to view saved palettes)
router.get('/palettes', async (req, res) => {
  try {
    const palettes = await Palette.find()
      .sort({ createdAt: -1 })
      .limit(50)
      .select('mood colors createdAt');

    res.status(200).json({
      palettes: palettes
    });
  } catch (error) {
    console.error('Error fetching palettes:', error.message);
    res.status(500).json({
      error: 'Failed to fetch palettes'
    });
  }
});

module.exports = router; 