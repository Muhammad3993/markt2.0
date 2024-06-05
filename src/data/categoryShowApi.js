import { apiClient } from "../common/apiCLient";

export const categoryShowApi = {
    async getCategoryShowApi(slug, language) {
        return await apiClient.fetch('get', `categories/${slug}`, null, language)
    }
}