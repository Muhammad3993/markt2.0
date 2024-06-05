import { apiClient } from "../common/apiCLient";

export const cartItemsApi = {
    async getCartItems(language) {
        return await apiClient.fetch('get', 'cart', null, language)
    }
}