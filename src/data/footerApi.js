import { apiClient } from '../common/apiCLient.js';

export const footerApi = {
    async getFooter(language){
        return await apiClient.fetch('get', 'footer', null, language)
    }
}