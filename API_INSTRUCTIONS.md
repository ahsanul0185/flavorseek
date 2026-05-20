# FlavorSeek - Edamam API Setup Guide

Welcome to the FlavorSeek source code! This application uses the **Edamam Recipe Search API** to fetch and display recipes. Before you launch or deploy the project, you will need to configure it with your own API credentials.

---

## 1. How to Get Your Edamam API Credentials

To get your free API credentials, please follow these steps:

1. Go to the [Edamam Developer Portal](https://developer.edamam.com/).
2. Sign up for a free account (or log in if you already have one).
3. Once logged in, navigate to your **Dashboard**.
4. Click on **Applications** and then **Create a new application**.
5. Select the **Recipe Search API** (make sure it's the Recipe Search API and not Nutrition Analysis or Food Database).
6. Select the **Developer (Free)** plan and fill out any required details to create the app.
7. Once created, click on your new application in the dashboard. Here you will find the three pieces of information you need:
   - **Application ID** (App ID)
   - **Application Keys** (App Key)
   - **Account User ID** (Usually your Edamam account username)

---

## 2. Adding the Credentials to Your Project

Now that you have your credentials, you need to plug them into the code:

1. Extract the project zip file and open the main folder.
2. Find the file named `.env` in the root of the folder.
3. Open the `.env` file using any standard text editor (like Notepad or VS Code). It contains variables that look like this:

   ```env
   VITE_EDAMAM_APP_ID=your_current_id
   VITE_EDAMAM_APP_KEY=your_current_key
   VITE_EDAMAM_ACCOUNT_USER=your_account_user_id
   ```

4. Replace `your_current_id`, `your_current_key`, and `your_account_user_id` with the actual strings you copied from your Edamam dashboard.
5. **Save the file**.
6. If you or your developer are running the local development server (`npm run dev`), you MUST stop it and restart it for the new credentials to be recognized.

---

## Technical Overview (For Developers)

If your development team wants to understand how the data flows, here is a quick breakdown of how the API and search filters are wired up:

### API Connection (`src/services/edamam.js`)
- The project uses `axios` to make HTTP `GET` requests to Edamam's `api/recipes/v2` endpoint.
- It pulls the configurations securely via `import.meta.env.VITE_EDAMAM_APP_ID`, `import.meta.env.VITE_EDAMAM_APP_KEY`, and sets the `Edamam-Account-User` HTTP header automatically.
- The `type="public"` parameter is always included to ensure the app fetches properly vetted consumer data.
- The service dynamically constructs query parameters, handling custom search queries or fetching random placeholder recipes to populate the home page.

### Filtering System
1. **User Interface (`src/pages/Home.jsx`)**: Predefined dietary filters (like "Vegan", "Gluten Free", "Peanut Free") are provided as interactive toggle buttons.
2. **State Management (`src/context/RecipeContext.jsx`)**: The selected filters form an array of active parameters stored in the `healthFilters` context variable, ensuring the data is managed globally.
3. **API Query Building (`src/services/edamam.js`)**: When a search is triggered, the service iterates over this `healthFilters` array and dynamically appends `health=...` parameters to the Edamam request URL. Edamam handles filtering the results on their end to only return recipes that strictly match EVERY selected label limit.
