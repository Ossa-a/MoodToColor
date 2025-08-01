const axios = require('axios');

class AIService {
  constructor() {
    this.apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;
    this.baseURL = process.env.OPENROUTER_API_KEY 
      ? 'https://openrouter.ai/api/v1' 
      : 'https://api.openai.com/v1';
    this.model = process.env.AI_MODEL || 'openai/gpt-3.5-turbo';
  }

  async generatePalette(mood) {
    try {
      const prompt = `Generate a 4-color palette that represents the mood: "${mood}". 
      Return ONLY a JSON array of exactly 4 HEX color codes (6 characters each, starting with #). 
      The colors should harmoniously represent the given mood. 
      Example format: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]`;

      const headers = {
        'Content-Type': 'application/json'
      };

      // Add appropriate authorization header
      if (process.env.OPENROUTER_API_KEY) {
        headers['Authorization'] = `Bearer ${this.apiKey}`;
        headers['HTTP-Referer'] = 'https://mood-palette-generator.com'; // Optional but recommended
        headers['X-Title'] = 'Mood Palette Generator'; // Optional but recommended
      } else {
        headers['Authorization'] = `Bearer ${this.apiKey}`;
      }

      const response = await axios.post(
        `${this.baseURL}/chat/completions`,
        {
          model: this.model,
          messages: [
            {
              role: 'system',
              content: 'You are a color palette generator. Always respond with valid JSON arrays containing exactly 4 HEX color codes.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 100
        },
        { headers }
      );

      const content = response.data.choices[0].message.content.trim();
      
      // Extract JSON array from the response
      const jsonMatch = content.match(/\[.*\]/);
      if (!jsonMatch) {
        throw new Error('Invalid response format from AI service');
      }

      const colors = JSON.parse(jsonMatch[0]);
      
      // Validate the colors array
      if (!Array.isArray(colors) || colors.length !== 4) {
        throw new Error('Invalid color array format');
      }

      // Validate each color is a valid HEX code
      const hexRegex = /^#[0-9A-Fa-f]{6}$/;
      for (const color of colors) {
        if (!hexRegex.test(color)) {
          throw new Error(`Invalid HEX color format: ${color}`);
        }
      }

      return colors;
    } catch (error) {
      console.error('AI Service Error:', error.message);
      throw new Error(`Failed to generate palette: ${error.message}`);
    }
  }
}

module.exports = new AIService(); 