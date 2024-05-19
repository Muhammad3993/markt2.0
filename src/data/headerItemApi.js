import { apiClient } from "../common/apiCLient";

export const headerItem = {
    async getHeaderItem(headerSlug) {
        return await apiClient.fetch('get', `header/categories/${headerSlug}`, null)
    }
}