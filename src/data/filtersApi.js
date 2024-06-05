import { apiClient } from "../common/apiCLient";

export const filterApi = {
    async getFilter(language) {
        return await apiClient.fetch('get', 'filters', null, language)
    }
}