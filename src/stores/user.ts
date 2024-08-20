import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const isAuthorized = ref(true);

    function switchAuthState() {
        isAuthorized.value = !isAuthorized.value
    }

    return { isAuthorized, switchAuthState };
})