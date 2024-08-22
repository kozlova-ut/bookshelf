import type { PiniaPluginContext } from 'pinia';

export function piniaPersistedState({ store }: PiniaPluginContext) {
    const storedState = localStorage.getItem(store.$id);
    if (storedState) {
        Object.assign(store.$state, JSON.parse(storedState));
    }

    store.$subscribe((mutation, state) => {
        localStorage.setItem(store.$id, JSON.stringify(state));
    });
}