import { apiClient } from '../common/apiCLient.js';

export const topCategoriesApi = {
    async getTopCategories(language) {
        return await apiClient.fetch('get', 'categories/top', null, language)
    }
}