import { apiClient } from "../common/apiCLient";

export const brandsApi = {
    async getBrandsApi(language) {
        return await apiClient.fetch('get', 'brands', null, language)
    }
}