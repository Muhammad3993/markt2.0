import { apiClient } from "../common/apiCLient";

export const tagsShowApi = {
    async getTagsShowApi(slug, language) {
        return await apiClient.fetch('get', `tags/${slug}`, null, language)
    }
}