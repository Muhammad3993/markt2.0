import { apiClient } from '../common/apiCLient'

export const productDetailApi = {
    async getProductDetailApi(slug) {
        return await apiClient.fetch('get', `products/${slug}`, null)
    }
}