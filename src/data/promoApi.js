import { apiClient } from '../common/apiCLient.js';

export const promoApi = {
    async getPromo() {
        return await apiClient.fetch('get', 'promos/extra', null)
    }
}