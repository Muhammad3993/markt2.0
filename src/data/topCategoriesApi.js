import { apiClient } from '../common/apiCLient.js';

export const topCategoriesApi = {
    async getTopCategories() {
        return await apiClient.fetch('get', 'categories/top', null)
    }
}