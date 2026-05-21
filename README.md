# FlavorSeek - Recipe Finder Prototype

A fast, mobile-responsive Single Page Application (SPA) built with React and Vite. It allows users to input ingredients and instantly view recipe suggestions, leveraging the Edamam Recipe API.

## Features

- **Ingredient Search:** Search for recipes based on comma-separated ingredients you have on hand.
- **Dietary Filters:** Easily toggle between popular dietary requirements (Vegan, Gluten-Free, Keto, etc.).
- **Responsive Grid Layout:** A clean, modern UI optimized for both desktop and mobile devices.
- **Direct Source Links:** Click on any recipe card to visit the dish's original source/instructions.

## Prerequisites

Before you begin, ensure you have the following installed to run this project locally:
- [Node.js](https://nodejs.org/en/download/) (v16.0 or higher recommended)
- `npm` (which comes with Node.js)

## Getting Started

Follow these steps to set up the project on your local machine.

### 1. Installation

Install the necessary dependencies:

```bash
npm install
```

### 2. Environment Variables (API Keys)

This project relies on the **Edamam Recipe API** to fetch data. You will need to provide your API keys to make it work.

1. Create a `.env` file in the root of the project (if it doesn't already exist).
2. Open the `.env` file and add the following keys. Replace the placeholder text with your actual Edamam Application ID and Key:

```env
VITE_EDAMAM_APP_ID=your_edamam_app_id_here
VITE_EDAMAM_APP_KEY=your_edamam_app_key_here
VITE_EDAMAM_ACCOUNT_USER=your_edamam_username_here
```

*(Note: You can get these credentials by creating a free account at [Edamam Developer Portal](https://developer.edamam.com/edamam-docs-recipe-api)).*

### 3. Run the Development Server

Once your environment variables are configured, start the local development server:

```bash
npm run dev
```

The application will now be running locally. Open your browser and navigate to `http://localhost:5173/` (or the port specified in your terminal) to view the app!

## Building for Production

If you wish to build the app for production (e.g., to deploy it to Vercel, Netlify, or GitHub Pages), run:

```bash
npm run build
```

This will bundle the React application into a `dist/` folder, which can be served using your hosting provider of choice.

## Technologies Used

- **React** (v19)
- **Vite** (Build Tool)
- **Tailwind CSS** (v4)
- **React Router** (Navigation)
- **Axios** (API Requests)
- **Edamam API** (Recipe Data)
