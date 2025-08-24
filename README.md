RECIPES/
│
├── backend/                 
│   ├── models/             
│   ├── routes/             
│   ├── importData.js        
│   ├── server.js           
│   ├── US_recipes.json      
│   └── .env                 
│
├── frontend/                
│   ├── public/              
│   ├── src/                 
│   │   ├── assets/          
│   │   ├── components/      
│   │   │   ├── Filters.jsx
│   │   │   ├── NutrientsTable.jsx
│   │   │   ├── RecipeDrawer.jsx
│   │   │   └── RecipeTable.jsx
│   │   ├── pages/           
│   │   │   ├── AboutPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── RecipesPage.jsx
│   │   │   └── RecipesPage.css
│   │   ├── services/        
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── postcss.config.js    
│   ├── vite.config.js       
│   └── index.css            
│
└── README.md                


### Clone Repository
    git clone https://github.com/panakalu1432/Recipes.git
    cd Recipes

### Backend Setup
    cd backend
    npm install

### Frontend Setup
    cd frontend
    npm install


### Features

    Browse recipes with pagination
    Filter recipes by cuisine, country, continent, etc.
    View detailed recipe information in a drawer
    Responsive UI with TailwindCSS
    Backend API with Express + MongoDB

### Available Scripts

### Backend:

    node server.js - Start backend server
    node importData.js - Import recipes data

### Frontend:

    npm run dev - Start Vite dev server
    npm run build - Build frontend for production
    npm run preview - Preview production build

## Future Improvements

    User authentication (login/register)
    Save favorite recipes
    Add nutritional info charts

    Deploy on Netlify

### Tech Stack

    Frontend: React, Vite, TailwindCSS

    Backend: Node.js, Express

    Database: MongoDB (Mongoose)

    Other: Axios, PostCSS


"# Recipes" 
