import { apiClient } from '../common/apiCLient.js';

export const promoApi = {
    async getPromo(language) {
        return await apiClient.fetch('get', 'promos/main', null, language)
    }
}