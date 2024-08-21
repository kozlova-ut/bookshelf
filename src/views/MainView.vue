<template>
    <div class="container">
        <h2>Каталог</h2>
        <div class="book-list">
            <BookCard
                v-for="book in books"
                :key="book.id"
                :book="book"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type {IBook} from '@/types/books.ts';
import { getBooks } from '@/api/books.ts';
import BookCard from '@/components/BookCard.vue';

const books = ref<IBook[]>([]);

const loadBooks = async () => {
    const response = await getBooks();
    books.value = response;
}

loadBooks();

</script>

<style lang="scss" scoped>
.book-list {
    display: flex;
    flex-wrap: wrap;
}

</style>