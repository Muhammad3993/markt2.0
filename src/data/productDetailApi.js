import { apiClient } from '../common/apiCLient'

export const productDetailApi = {
    async getProductDetailApi(slug, language) {
        return await apiClient.fetch('get', `products/${slug}`, null, language)
    }
}