<template>
    
</template>

<script setup>
import { getBooks } from '@/api/books.ts'

const loadBooks = async () => {
    const response = await getBooks();
    console.log(response);
}

loadBooks();

</script>