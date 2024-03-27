import { apiClient } from "../common/apiCLient";

export const brandsApi = {
    async getBrandsApi() {
        return await apiClient.fetch('get', 'brands', null)
    }
}