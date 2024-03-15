import { apiClient } from "../common/apiCLient"

export const promosNew = {
    async getPromosNew() {
        return await apiClient.fetch('get', 'promos/left', null)
    }
}