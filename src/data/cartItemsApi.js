import { apiClient } from "../common/apiCLient";

export const cartItemsApi = {
    async getCartItems() {
        return await apiClient.fetch('get', 'cart', null)
    }
}