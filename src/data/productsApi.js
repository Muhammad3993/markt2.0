import { apiClient } from "../common/apiCLient";

export const productsApi = {
    async getProductsApi(page, categoryId) {
        return await apiClient.fetch('get', `products?page=${page}&categories=${categoryId}`, null)
    }
}