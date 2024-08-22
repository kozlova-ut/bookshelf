import { defineStore } from "pinia";
import { ref } from "vue";
import { BookStatus } from "@/types/books";
import type { IBook } from "@/types/books";


export const useMyBookStore = defineStore('myBook', () => {
    const myBooks = ref<Record<number, IBook>>({});
    
    function toggleBookStatus(book: IBook, status: BookStatus) {

        if ( myBooks.value[book.id]) {

            myBooks.value[book.id].status === status 
                ? delete myBooks.value[book.id] 
                : myBooks.value[book.id].status = status;
           
        } else {
            myBooks.value[book.id] = { ...book, status };
        }
    }

    function getBookStatus(bookId: number) {
        if (myBooks.value[bookId]) {
            return myBooks.value[bookId].status
        }
    }

    return { myBooks, toggleBookStatus, getBookStatus };
});