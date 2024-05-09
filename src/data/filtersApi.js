import { apiClient } from "../common/apiCLient";

export const filterApi = {
    async getFilter() {
        return await apiClient.fetch('get', 'filters', null)
    }
}