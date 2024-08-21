<template>
    <div class="book-card">
        <div class="book-image">
            <div class="shadow"  v-if="user.isAuthorized"></div>
            <img src="@/assets/img/placeholder.png" :alt="book.title">
            <div class="actions">
                <ActionButtons  
                    v-if="user.isAuthorized"
                    :book="book"
                    :btnShape="Shape.TAB"
                ></ActionButtons>
            </div>
        </div>
        <div class="book-content">
            <div>
                <h5>{{ book.title }}</h5>
                <span>{{ book.author }}</span>
            </div>
            <RouterLink :to="`/book/${book.id}`" class="book-button">Подробнее</RouterLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import type { IBook } from '@/types/books';
import { useUserStore } from '@/stores/user';
import { Shape } from '@/types/service';

import ActionButtons from '@/components/ActionButtons.vue'

const user = useUserStore();

const props = defineProps<{ book: IBook }>();


</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.book-card {
    display: flex;
    flex-direction: column;
    width: 200px;  
    margin: 0px 10px 30px;
    border: 1px solid #999999;
    border-radius: 10px;

    &:hover .shadow {
        opacity: 1;
    }

    &:hover .actions {
        bottom: 0;
        opacity: 1;
    }
}

.book-image {
    position: relative;
    overflow: hidden;

    .shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 8px 8px 0px 0px;
        opacity: 0;
        transition: .5s ease-in-out;
    }

    .actions {
        position: absolute;
        width: 100%;
        height: 45px;
        bottom: -45px;
        right: 0;
        opacity: 0;
        transition: .5s ease-in-out;
        text-align: right;
    }
} 

.book-content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;

    h5 {
        margin: 0px 0px 10px;
    }
}

.book-button {
    display: block;
    margin-top: 10px;
    @include button;
}

</style>