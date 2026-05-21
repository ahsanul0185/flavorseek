import axios from 'axios';

export const getEdamamRecipes = async ({ q, healthFilters = [], url = null }) => {
    if (url) {
        const res = await axios.get(url, {
            headers: {
                'Edamam-Account-User': import.meta.env.VITE_EDAMAM_ACCOUNT_USER || 'ahsanul'
            }
        });
        return res.data;
    }

    const params = new URLSearchParams({
        type: 'public', // Must be 'public' to ensure properly vetted health labels
        app_id: import.meta.env.VITE_EDAMAM_APP_ID,
        app_key: import.meta.env.VITE_EDAMAM_APP_KEY,
    });

    if (q && q !== 'random') {
        params.append('q', q);
    } else if (q === 'random') {
        params.append('random', 'true');
        
        // API requires either 'q' or a filter parameter to be present.
        if (healthFilters.length === 0) {
            // Add a broad search term to avoid API 400 Bad Request if no filters
            const broadTerms = ['dinner', 'lunch', 'breakfast', 'snack', 'healthy', 'quick'];
            const randomTerm = broadTerms[Math.floor(Math.random() * broadTerms.length)];
            params.append('q', randomTerm);
        }
    } else if (healthFilters.length === 0) {
        // If everything is completely empty, provide a fallback to prevent failure
        params.append('q', 'dinner');
    }

    // Append all selected health labels
    healthFilters.forEach(f => {
        params.append('health', f);
    });

    const res = await axios.get(`https://api.edamam.com/api/recipes/v2?${params.toString()}`, {
        headers: {
            'Edamam-Account-User': import.meta.env.VITE_EDAMAM_ACCOUNT_USER || 'ahsanul'
        }
    });

    if (q && q !== 'random') {
        const searchTerms = q.toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
        
        if (searchTerms.length > 0) {
            res.data.hits = res.data.hits.filter(hit => {
                const ingredientsText = hit.recipe.ingredientLines.join(' ').toLowerCase();
                // Ensure every comma-separated search term exists at least once in the ingredients
                return searchTerms.every(term => ingredientsText.includes(term));
            });
        }
    }

    return res.data;
};
