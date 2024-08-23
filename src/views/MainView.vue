<template>
    <main>
        <h2>Каталог</h2>
        <BookList :books="books"></BookList>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type {IBook} from '@/types/books.ts';
import { getBooks } from '@/api/books.ts';
import BookList from '@/components/BookList.vue';

const books = ref<IBook[]>([]);

const loadBooks = async () => {
    const response = await getBooks();
    books.value = response;
}

loadBooks();

</script>
