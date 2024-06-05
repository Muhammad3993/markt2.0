import { apiClient } from '../common/apiCLient.js'

export const headerApi = {
    async getHeader(language){
        return await apiClient.fetch('get', 'header', null, language)
    }
}