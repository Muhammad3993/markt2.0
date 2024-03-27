import { apiClient } from "../common/apiCLient";

export const categoryShowApi = {
    async getCategoryShowApi(slug) {
        return await apiClient.fetch('get', `categories/${slug}`, null)
    }
}