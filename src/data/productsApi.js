import { apiClient } from "../common/apiCLient";

export const productsApi = {
    async getProductsApi(page, categoryId, tagId, brandId, language) {
        return await apiClient.fetch('get', `products?page=${page}&categories=${categoryId}&tags=${tagId}&brands=${brandId}`, null, language)
    }
}