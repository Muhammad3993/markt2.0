import { apiClient } from "../common/apiCLient"

export const promosNew = {
    async getPromosNew(language) {
        return await apiClient.fetch('get', 'promos/left', null, language)
    }
}