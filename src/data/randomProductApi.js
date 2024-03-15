import { apiClient } from '../common/apiCLient.js';

export const randomProductApi = {
    async getRandomProductApi() {
        return await apiClient.fetch('get', 'products/random', null)
    }
}