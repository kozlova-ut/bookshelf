<template>
    <div class="main-content">
        <aside>
            <div 
                @click="setFilter(BookStatus.TO_READ)" 
                :class="['tab', 'to-read', {'active': currentStatus === BookStatus.TO_READ}]">
            </div>
            <div 
                @click="setFilter(BookStatus.IN_PROGRESS)" 
                :class="['tab', 'in-progress', {'active': currentStatus === BookStatus.IN_PROGRESS}]">
            </div>
            <div 
                @click="setFilter(BookStatus.COMPLETED)"  
                :class="['tab', 'completed', {'active': currentStatus === BookStatus.COMPLETED}]">
            </div>
        </aside>
        <main>
            <h2>Мои книги</h2>
            <BookList :books="filteredBooks"></BookList>
        </main>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useMyBookStore } from '@/stores/myBooks';
import BookList from '@/components/BookList.vue';
import { BookStatus, type IBook } from '@/types/books';

const myBooksStore = useMyBookStore();

const myBooks = computed(():IBook[] => {
    return Object.values(myBooksStore.myBooks);
})

const currentStatus = ref<BookStatus|null>(null);

const setFilter = (status: BookStatus) => {
    console.log(currentStatus.value);

    currentStatus.value = currentStatus.value === status ? null : status;  
}

const filteredBooks = computed(() => {
    return myBooks.value.filter(book => {
        if (currentStatus.value === BookStatus.TO_READ) {
            return book.status === BookStatus.TO_READ;
        }
        else if (currentStatus.value === BookStatus.IN_PROGRESS) {
            return book.status === BookStatus.IN_PROGRESS;
        }
        else if (currentStatus.value === BookStatus.COMPLETED) {
            return book.status === BookStatus.COMPLETED;
        }
        else return true;
    })
})

</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
@import '@/assets/styles/mixins';

aside {
    flex: 0 0 70px;
    padding: 40px 5px;

    .tab {
        display: inline-block;
        padding: 15px;
        width: 60px;
        height: 60px;
        line-height: 45px;
        text-align: center;
        background: white;
        transition: .5s ease-in-out;
        cursor: pointer;

        &:hover {
            background: $orange;
        }

        &.active {
            background: $orange;
        }
    }


    @include icons;
}

</style>