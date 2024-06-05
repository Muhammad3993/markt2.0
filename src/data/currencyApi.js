import { apiClient } from "../common/apiCLient";

export const currencyApi = {
    async getCurrencyApi(language) {
        return await apiClient.fetch('get', 'currency_list', null, language)
    }
}