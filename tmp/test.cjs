const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

async function run() {
    const params = new URLSearchParams({
        type: 'public',
        app_id: process.env.VITE_EDAMAM_APP_ID,
        app_key: process.env.VITE_EDAMAM_APP_KEY,
        random: 'true', // added random
    });
    // try no 'q', just health
    params.append('health', 'pescatarian');

    console.log("URL:", `https://api.edamam.com/api/recipes/v2?${params.toString()}`);
    try {
        const res = await axios.get(`https://api.edamam.com/api/recipes/v2?${params.toString()}`);
        console.log("Hits:", res.data.hits.length);
        if (res.data.hits.length > 0) {
            console.log("First recipe:", res.data.hits[0].recipe.label, res.data.hits[0].recipe.healthLabels);
            console.log("2nd recipe:", res.data.hits[1].recipe.label, res.data.hits[1].recipe.healthLabels);
        }
    } catch(err) {
        console.error(err.response?.data || err.message);
    }
}
run();
