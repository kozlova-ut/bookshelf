<template>
    <main>
        <h2>Каталог</h2>
        <div class="search">
            <input type="text" placeholder="Поиск" v-model="searchText"> 
        </div>
        <BookList :books="books"></BookList>
    </main>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import type {IBook} from '@/types/books.ts';
import { getBooks } from '@/api/books.ts';
import BookList from '@/components/BookList.vue';

const books = ref<IBook[]>([]);

const loadBooks = async (searchText: string) => {
    const response = await getBooks(searchText);
    books.value = response;
}

loadBooks('');

const searchText = ref('');

watch(searchText, (newText) => {
    loadBooks(newText);
})

</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.search {
    position: relative;
    margin: 20px 0px;
    width: 430px;
    
    input {
        width: 100%;
        padding: 10px 15px;
        border: 1px solid $teal;
        border-radius: 8px;
        outline: none;
    }

    &::after {
        content: url('@/assets/img/search.png');
        display: block;
        width: 24px;
        height: 24px;
        position: absolute;
        right: 15px;
        top: calc(50% - 12px);
    }
}
</style>
