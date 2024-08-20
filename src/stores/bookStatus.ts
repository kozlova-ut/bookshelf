import { defineStore } from "pinia";
import { ref } from "vue";
import { BookStatus } from "@/types/books";


export const useBookStatusStore = defineStore('bookStatus', () => {
    const bookStatuses = ref<Record<number, BookStatus | null>>({});
    
    function toggleBookStatus(bookId: number, status: BookStatus) {
        if (bookStatuses.value[bookId] === status) {
            bookStatuses.value[bookId] = null;
        } else {
            bookStatuses.value[bookId] = status;
        }
    }

    function getBookStatus(bookId: number) {
        return bookStatuses.value[bookId];
    }

    return { bookStatuses, toggleBookStatus, getBookStatus };
});