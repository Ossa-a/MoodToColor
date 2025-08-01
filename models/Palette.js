const mongoose = require('mongoose');

const paletteSchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true,
    trim: true
  },
  colors: {
    type: [String],
    required: true,
    validate: {
      validator: function(colors) {
        return colors.length === 4 && colors.every(color => /^#[0-9A-Fa-f]{6}$/.test(color));
      },
      message: 'Colors must be an array of exactly 4 valid HEX color codes'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Palette', paletteSchema); 