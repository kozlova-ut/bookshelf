<template>
    <div class="container">
        <h2>Мои книги</h2>
        <BookList :books="myBooks"></BookList>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useMyBookStore } from '@/stores/myBooks';
import BookList from '@/components/BookList.vue';

const myBooksStore = useMyBookStore();

const myBooks = computed(() => {
    return Object.values(myBooksStore.myBooks);
})

</script>

<style lang="scss" scoped>

</style>