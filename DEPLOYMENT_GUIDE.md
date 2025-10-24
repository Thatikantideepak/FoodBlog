# Deployment Guide for FoodRecipe Application

## MongoDB Atlas Configuration

Your MongoDB Atlas connection string has been configured:
```
mongodb+srv://thatikantideepak934_db_user:deepak@cluster0.k4ewqe4.mongodb.net/foodrecipe
```

## Deployment Options

### Option 1: Deploy to Vercel (Recommended for Full-Stack)

#### Backend Deployment to Vercel:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Create vercel.json in backend directory:**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "server.js"
       }
     ],
     "env": {
       "CONNECTION_STRING": "mongodb+srv://thatikantideepak934_db_user:deepak@cluster0.k4ewqe4.mongodb.net/foodrecipe",
       "SECRET_KEY": "your_super_secret_jwt_key_here_change_in_production_12345"
     }
   }
   ```

3. **Deploy backend:**
   ```bash
   cd backend
   vercel --prod
   ```

#### Frontend Deployment to Vercel:

1. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   cd frontend
   vercel --prod
   ```

### Option 2: Deploy to Netlify + Railway

#### Backend to Railway:
1. Go to [Railway.app](https://railway.app)
2. Connect your GitHub repository
3. Select the backend folder
4. Add environment variables:
   - `CONNECTION_STRING`: `mongodb+srv://thatikantideepak934_db_user:deepak@cluster0.k4ewqe4.mongodb.net/foodrecipe`
   - `SECRET_KEY`: `your_super_secret_jwt_key_here_change_in_production_12345`
   - `PORT`: `4000`

#### Frontend to Netlify:
1. Go to [Netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 3: Deploy to Heroku

#### Backend to Heroku:
1. Install Heroku CLI
2. Create Heroku app:
   ```bash
   heroku create your-app-name-backend
   ```
3. Set environment variables:
   ```bash
   heroku config:set CONNECTION_STRING="mongodb+srv://thatikantideepak934_db_user:deepak@cluster0.k4ewqe4.mongodb.net/foodrecipe"
   heroku config:set SECRET_KEY="your_super_secret_jwt_key_here_change_in_production_12345"
   ```
4. Deploy:
   ```bash
   git subtree push --prefix backend heroku main
   ```

#### Frontend to Netlify:
1. Build frontend: `npm run build`
2. Deploy to Netlify

## Environment Variables for Production

### Backend (.env):
```env
CONNECTION_STRING=mongodb+srv://thatikantideepak934_db_user:deepak@cluster0.k4ewqe4.mongodb.net/foodrecipe
SECRET_KEY=your_super_secret_jwt_key_here_change_in_production_12345
PORT=4000
NODE_ENV=production
```

### Frontend API Configuration:
Update all API calls from `http://localhost:4000` to your deployed backend URL.

## Quick Deploy Commands

### For Vercel (Recommended):

1. **Deploy Backend:**
   ```bash
   cd backend
   npx vercel --prod
   ```

2. **Deploy Frontend:**
   ```bash
   cd frontend
   npx vercel --prod
   ```

3. **Update Frontend API URLs:**
   Replace `http://localhost:4000` with your backend Vercel URL in:
   - `frontend/src/App.jsx`
   - `frontend/src/components/InputForm.jsx`
   - `frontend/src/pages/AddFoodRecipe.jsx`
   - `frontend/src/components/RecipeItems.jsx`

## Expected Live URLs:
- **Backend API**: `https://your-backend-app.vercel.app`
- **Frontend**: `https://your-frontend-app.vercel.app`

## Testing Your Deployment:
1. Visit your frontend URL
2. Try signing up/login
3. Create a recipe
4. Test all functionality
