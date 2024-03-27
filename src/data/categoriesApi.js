import { apiClient } from "../common/apiCLient";

export const categoriesApi = {
    async getCategoriesApi() {
        return await apiClient.fetch('get', 'categories', null)
    }
}