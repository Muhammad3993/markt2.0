import { apiClient } from "../common/apiCLient";

export const searchApi = {
    async getSearchApi(searchItem, language) {
        return await apiClient.fetch('get', `search?search=${searchItem}`, null, language)
    }
}