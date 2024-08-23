<template>
    <main>
        <div class="book" v-if="book">
            <div class="book__img">
                <img src="@/assets/img/placeholder.png" :alt="book.title">
            </div>
            <div class="book__main">
                <ActionButtons 
                        v-if="user.isAuthorized"
                    :book="book" 
                    :btnShape="Shape.SQUARE">
                </ActionButtons>
                <h2>{{ book.title }}</h2>
                <p>{{ book.description }}</p>
                <div class="details">
                    <span>
                        <b>Автор:</b> {{ book.author }}
                    </span>
                    <span>
                        <b>Год:</b> {{ book.publication_year }}
                    </span>
                    <span>
                        <b>Жанр: </b> {{ book.genre.join(', ') }}
                    </span>
                </div>
            </div>
        </div>
    </main>    
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { getBook } from '@/api/books';
import { useRoute } from 'vue-router';
import type { IBook } from '@/types/books';
import ActionButtons from '@/components/ActionButtons.vue';
import { Shape } from '@/types/service';
import { useUserStore } from '@/stores/user';

const user = useUserStore();

const route = useRoute()
const bookId = Number(route.params.id);

const book = ref<IBook | null>();

const loadBook = async (bookId:number) => {
    const response = await getBook(bookId);
    if (response) {
        book.value = response
    }
}

loadBook(bookId);

</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.book {
    display: flex;

    &__img {
        flex:0 0 300px ;
    }

    &__main {
        flex: 1 1 auto;
        padding: 0px 20px;

        .details {
            padding: 20px 0px;

            span {
                display: block;
                margin-bottom: 10px;
            } 
        }
    }
}
</style>