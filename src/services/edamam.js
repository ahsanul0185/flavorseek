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
        type: 'public',
        app_id: import.meta.env.VITE_EDAMAM_APP_ID,
        app_key: import.meta.env.VITE_EDAMAM_APP_KEY,
    });

    if (q) {
        params.append('q', q);
    } else if (healthFilters.length === 0) {
        // Fallback or default query when nothing is specified
        params.append('q', 'random');
    }

    healthFilters.forEach(f => {
        params.append('health', f);
    });

    const res = await axios.get(`https://api.edamam.com/api/recipes/v2?${params.toString()}`, {
        headers: {
            'Edamam-Account-User': import.meta.env.VITE_EDAMAM_ACCOUNT_USER || 'ahsanul'
        }
    });

    return res.data;
};
