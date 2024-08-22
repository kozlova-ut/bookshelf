<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <ul class="header__menu">
                    <RouterLink to="/" class="header__link">Главная</RouterLink>
                </ul>
                <div class="header__account">
                    <RouterLink to="/my-books" v-if="user.isAuthorized" class="header__link">Мои книги</RouterLink>
                    <button @click="user.switchAuthState">{{ user.isAuthorized ? 'Выйти' : 'Войти' }}</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { RouterLink } from 'vue-router';

const user = useUserStore();


</script>

<style lang="scss">
    @import '@/assets/styles/variables';
    @import '@/assets/styles/mixins';

    .header {
        padding: 20px 0px;
        background: $teal;

        &__content {
            display: flex;
            align-items: center;
        }

        &__link {
            margin-right: 20px;
            font-weight: bold;
            color: $orange;
            cursor: pointer;
            transition: all .5s ease;

            &:hover {
                color: $dark-orange;   
            }
        }

        &__account {
            margin-left: auto;
            
            button {
                @include button;
            }
        }
    }
</style>