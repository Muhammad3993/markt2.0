import { apiClient } from '../common/apiCLient.js';

export const footerApi = {
    async getFooter(){
        return await apiClient.fetch('get', 'footer', null)
    }
}