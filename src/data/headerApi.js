import { apiClient } from '../common/apiCLient.js'

export const headerApi = {
    async getHeader(){
        return await apiClient.fetch('get', 'header', null)
    }
}