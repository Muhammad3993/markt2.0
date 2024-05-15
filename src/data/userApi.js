import { apiClient } from '../common/apiCLient.js';

export const userApi = {
    async getUser(){
        return await apiClient.fetch('get', 'auth/telegram/callback?id=5673577167&first_name=Muhammad&username=dayless_nights&photo_url=https%3A%2F%2Ft.me%2Fi%2Fuserpic%2F320%2F_zn11Njtgt03sqpeG1arHRgce7Re1CoxU-bJgK9q6AAKZ_LYVhxFWtNJSfQLqHI5.jpg&auth_date=1715622856&hash=6f4e63cedda861ace4c5923e40afb8d352a1bba0f755c386a8a2775eaee6b471', null)
    }
}