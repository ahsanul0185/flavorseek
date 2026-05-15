import api from '../lib/api';

export const getRandomRecipes = async (number = 10, tags = '') => {
    try {
        const response = await api.get('/recipes/random', {
            params: {
                number,
                ...(tags && { tags })
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getFoodTrivia = async () => {
    try {
        const response = await api.get('/food/trivia/random');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getRecipesByIngredients = async (ingredients, number = 100, ranking = 1, ignorePantry = true) => {
    try {
        const response = await api.get('/recipes/findByIngredients', {
            params: {
                ingredients,
                number,
                ranking,
                ignorePantry
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const searchRecipes = async (params = {}) => {
    try {
        const response = await api.get('/recipes/complexSearch', {
            params: {
                ...params,
                addRecipeInformation: true // To get more details for cards
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
