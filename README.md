# Food Recipe Application

A full-stack web application for sharing and managing food recipes with user authentication.

## Features

- **User Authentication**: Sign up, login, and logout functionality
- **Recipe Management**: Create, read, update, and delete recipes
- **Image Upload**: Upload cover images for recipes
- **Favorites System**: Save favorite recipes locally
- **Responsive Design**: Modern UI with mobile-friendly layout
- **Real-time Updates**: Dynamic content loading

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Multer** for file uploads
- **bcrypt** for password hashing

### Frontend
- **React 19** with Vite
- **React Router DOM** for routing
- **Axios** for API calls
- **React Icons** for UI icons
- **Custom CSS** with responsive design

## Project Structure

```
FoodRecipe-main/
├── backend/
│   ├── config/          # Database configuration
│   ├── controller/      # API route handlers
│   ├── middleware/      # Authentication middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── public/          # Static files (uploaded images)
│   └── server.js        # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Page components
│   │   ├── assets/      # Static assets
│   │   └── App.jsx      # Main app component
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```env
   CONNECTION_STRING=mongodb://localhost:27017/foodrecipe
   SECRET_KEY=your_super_secret_jwt_key_here_change_in_production
   PORT=4000
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /signUp` - User registration
- `POST /login` - User login
- `GET /user/:id` - Get user details

### Recipes
- `GET /recipe` - Get all recipes
- `GET /recipe/:id` - Get specific recipe
- `POST /recipe` - Create recipe (protected)
- `PUT /recipe/:id` - Update recipe
- `DELETE /recipe/:id` - Delete recipe

## Usage

1. **Home Page**: View all available recipes
2. **Sign Up/Login**: Create an account or login to access features
3. **Add Recipe**: Create new recipes with images, ingredients, and instructions
4. **My Recipes**: View and manage your own recipes
5. **Favorites**: Save recipes to your favorites list
6. **Recipe Details**: View full recipe information

## Development

### Backend Development
- Uses nodemon for auto-restart during development
- Environment variables for configuration
- Error handling and validation
- CORS enabled for frontend communication

### Frontend Development
- Vite for fast development and building
- ESLint for code quality
- React Router for navigation
- Axios for API communication

## Production Deployment

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Start the backend in production:
   ```bash
   cd backend
   npm start
   ```

3. Serve the built frontend files through the backend's static file serving

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected routes for authenticated users
- Input validation and error handling
- Secure file upload handling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
