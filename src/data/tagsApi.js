import { apiClient } from "../common/apiCLient";

export const tagsApi = {
    async getTagApi(language) {
        return await apiClient.fetch('get', 'tags', null, language);
    }
}