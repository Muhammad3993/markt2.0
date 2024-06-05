import { apiClient } from "../common/apiCLient";

export const categoriesApi = {
    async getCategoriesApi(language) {
        return await apiClient.fetch('get', 'categories', null, language)
    }
}