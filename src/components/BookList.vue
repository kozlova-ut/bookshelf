<template>
<div class="book-list">
    <BookCard
        v-for="book in books"
        :key="book.id"
        :book="book"
    />
</div>
    
</template>

<script lang="ts" setup>
import BookCard from '@/components/BookCard.vue';
import type { IBook } from '@/types/books';

const props = defineProps<{books: IBook[]}>();

</script>

<style lang="scss" scoped>

.book-list {
    display: flex;
    flex-wrap: wrap;
}

</style>