import { apiClient } from "../common/apiCLient";

export const tagsApi = {
    async getTagApi() {
        return await apiClient.fetch('get', 'tags', null);
    }
}