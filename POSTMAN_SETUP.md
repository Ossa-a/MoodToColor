# Postman Collection Setup Guide

This guide will help you set up and use the Postman collection for testing the Mood Palette Generator API.

## 📁 Files Included

- `Mood-Palette-Generator.postman_collection.json` - Main collection with all API endpoints
- `Mood-Palette-Generator.postman_environment.json` - Environment variables

## 🚀 Quick Setup

### 1. Import the Collection

1. Open Postman
2. Click **Import** button
3. Select the `Mood-Palette-Generator.postman_collection.json` file
4. The collection will be imported with all endpoints

### 2. Import the Environment

1. In Postman, go to **Environments** tab
2. Click **Import**
3. Select the `Mood-Palette-Generator.postman_environment.json` file
4. Select the environment from the dropdown in the top-right corner

### 3. Start Your Backend

Make sure your backend is running:
```bash
npm run dev
```

The server should be running on `http://localhost:3000`

## 📋 Available Endpoints

### Health Check
- **Method**: GET
- **URL**: `{{base_url}}/health`
- **Purpose**: Check if the API is running
- **Expected Response**: Status 200 with API health info

### API Information
- **Method**: GET
- **URL**: `{{base_url}}/`
- **Purpose**: Get API documentation and available endpoints
- **Expected Response**: Status 200 with endpoint list

### Generate Palette
- **Method**: POST
- **URL**: `{{base_url}}/api/generate-palette`
- **Headers**: `Content-Type: application/json`
- **Body**: `{"mood": "your mood description"}`
- **Expected Response**: Status 200 with 4 HEX colors

### Get Recent Palettes
- **Method**: GET
- **URL**: `{{base_url}}/api/palettes`
- **Purpose**: Get the 50 most recent palettes
- **Expected Response**: Status 200 with palette array

## 🧪 Test Requests Included

### ✅ Success Cases
1. **Generate Palette - Peaceful Sunset**
   - Mood: "peaceful sunset"
   - Tests basic functionality

2. **Generate Palette - Happy**
   - Mood: "happy and energetic"
   - Tests different mood types

3. **Generate Palette - Calm**
   - Mood: "calm and serene"
   - Tests serene moods

4. **Generate Palette - Mysterious**
   - Mood: "mysterious and dark"
   - Tests darker mood palettes

### ❌ Error Cases
1. **Empty Mood Error**
   - Body: `{"mood": ""}`
   - Expected: 400 Bad Request

2. **Missing Mood Error**
   - Body: `{"description": "test"}`
   - Expected: 400 Bad Request

3. **404 Error Test**
   - URL: `/api/nonexistent`
   - Expected: 404 Not Found

## 🔧 Environment Variables

The environment includes these variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `base_url` | `http://localhost:3000` | API base URL |
| `api_version` | `v1` | API version |
| `content_type` | `application/json` | Default content type |

## 🎯 How to Use

### 1. Test Health Check First
1. Select the **Health Check** request
2. Click **Send**
3. Verify you get a 200 response

### 2. Generate Your First Palette
1. Select **Generate Palette** request
2. The body is pre-filled with "peaceful sunset"
3. Click **Send**
4. You should get 4 HEX color codes back

### 3. Try Different Moods
1. Use the different mood requests (Happy, Calm, Mysterious)
2. Or modify the body in any request to test your own moods

### 4. Check Generated Palettes
1. After generating a few palettes, use **Get Recent Palettes**
2. This will show all palettes saved in your database

## 🔍 Response Examples

### Successful Palette Generation
```json
{
  "colors": ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]
}
```

### Health Check Response
```json
{
  "status": "OK",
  "message": "Mood Palette Generator API is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Error Response
```json
{
  "error": "Mood is required and must be a non-empty string"
}
```

## 🚨 Troubleshooting

### Common Issues

1. **Connection Refused**
   - Make sure your backend is running (`npm run dev`)
   - Check if the port is correct (default: 3000)

2. **500 Internal Server Error**
   - Check your `.env` file has correct API keys
   - Verify MongoDB is running and accessible

3. **400 Bad Request**
   - Ensure the request body is valid JSON
   - Check that the "mood" field is present and not empty

4. **404 Not Found**
   - Verify the URL is correct
   - Check that the endpoint exists in your backend

### Environment Setup Issues

1. **Environment Not Selected**
   - Make sure "Mood Palette Generator Environment" is selected in the dropdown
   - The `{{base_url}}` variable should resolve to `http://localhost:3000`

2. **Variables Not Working**
   - Check that the environment is imported correctly
   - Verify the variable names match exactly

## 📊 Testing Strategy

### Manual Testing Flow
1. **Health Check** → Verify API is running
2. **API Info** → Check available endpoints
3. **Generate Palette** → Test basic functionality
4. **Different Moods** → Test various inputs
5. **Error Cases** → Verify error handling
6. **Get Palettes** → Check database integration

### Automated Testing
The collection includes automated tests that run on each request:
- Status code validation
- Response time checks
- Content-Type verification

## 🔄 Running the Full Collection

1. Click the **Run** button next to the collection name
2. Select which requests to run
3. Choose the environment
4. Click **Run Mood Palette Generator API**

This will execute all requests in sequence and show you the results.

## 📝 Notes

- All requests use the `{{base_url}}` variable for easy URL management
- Error cases are included to test your error handling
- The collection includes both success and failure scenarios
- Response times are logged for performance monitoring

## 🎨 Customization

Feel free to modify the collection:
- Add new mood examples
- Change the base URL for different environments
- Add more error test cases
- Customize the automated tests

Happy testing! 🚀 