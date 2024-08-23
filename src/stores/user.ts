import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        isAuthorized: false
    }),
    actions: {
        switchAuthState() {
            this.isAuthorized = !this.isAuthorized
        }
    }
})