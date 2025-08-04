<<<<<<< HEAD
# Mood Palette Generator Backend

A Node.js/Express.js backend API that generates color palettes based on mood descriptions using OpenAI GPT-3.5.

## Features

- 🎨 Generate 4-color palettes based on mood descriptions
- 🗄️ MongoDB integration for storing generated palettes
- 🤖 AI integration (OpenRouter or OpenAI) for intelligent color generation
- 🔒 Environment variable configuration
- 📝 Comprehensive error handling and logging
- 🌐 CORS enabled for frontend integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB database (local or cloud)
- OpenRouter API key (recommended) or OpenAI API key

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mood-palette-generator-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp env.example .env
```

4. Configure environment variables in `.env`:
```env
MONGODB_URI=mongodb://localhost:27017/mood-palette-generator
OPENROUTER_API_KEY=your_openrouter_api_key_here
AI_MODEL=openai/gpt-3.5-turbo
PORT=3000
```

### Setting up OpenRouter (Recommended)

1. Sign up at [OpenRouter](https://openrouter.ai/)
2. Get your API key from the dashboard
3. Add it to your `.env` file as `OPENROUTER_API_KEY`
4. Optionally choose a different model in `AI_MODEL`:
   - `openai/gpt-3.5-turbo` (default, cost-effective)
   - `openai/gpt-4` (more capable)
   - `anthropic/claude-3-sonnet` (alternative)
   - `google/gemini-pro` (Google's model)

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

### POST /api/generate-palette

Generate a color palette based on a mood description.

**Request Body:**
```json
{
  "mood": "peaceful sunset"
}
```

**Response:**
```json
{
  "colors": ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]
}
```

**Example cURL:**
```bash
curl -X POST http://localhost:3000/api/generate-palette \
  -H "Content-Type: application/json" \
  -d '{"mood": "peaceful sunset"}'
```

### GET /api/palettes

Get recent palettes (optional endpoint).

**Response:**
```json
{
  "palettes": [
    {
      "mood": "peaceful sunset",
      "colors": ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"],
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### GET /health

Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Mood Palette Generator API is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## Project Structure

```
├── config/
│   └── database.js          # MongoDB connection
├── models/
│   └── Palette.js           # Mongoose schema
├── routes/
│   └── paletteRoutes.js     # API routes
├── services/
│   └── openaiService.js     # OpenAI integration
├── server.js                # Main server file
├── package.json
├── env.example
└── README.md
```

## Error Handling

The API includes comprehensive error handling:

- **400 Bad Request**: Invalid input (missing mood, invalid format)
- **500 Internal Server Error**: OpenAI API errors, database errors
- **404 Not Found**: Invalid endpoints

All errors are logged to the console for debugging.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `OPENROUTER_API_KEY` | OpenRouter API key (recommended) | Yes* |
| `OPENAI_API_KEY` | OpenAI API key (alternative) | Yes* |
| `AI_MODEL` | AI model to use (default: openai/gpt-3.5-turbo) | No |
| `PORT` | Server port (default: 3000) | No |

*Either `OPENROUTER_API_KEY` or `OPENAI_API_KEY` is required

## Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **axios**: HTTP client for AI API calls
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Development

### Running Tests
```bash
# Add test scripts to package.json when implementing tests
npm test
```

### Code Style
The project follows standard JavaScript/Node.js conventions.

## License

MIT License - feel free to use this project for your own applications.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For issues and questions, please open an issue on the repository. 
=======
﻿# MoodToColor

A complete mood-to-color palette generator application.

## Structure
- Backend/ - Express.js API with AI integration
- Frontend/ - (Coming soon)
- Mobile/ - (Coming soon)

## Quick Start
\\\ash
cd Backend
npm install
npm run dev
\\\

>>>>>>> 0565ebbee9949df1584e3a61fe181f92c2040add
