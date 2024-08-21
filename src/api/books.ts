import type { IBook } from "@/types/books";

export const getBooks = async (): Promise<IBook[]> => {
    try {
        const fetchResponse = await fetch('https://freetestapi.com/api/v1/books');
        const response = await fetchResponse.json();
        return response;
    } catch(err) {
        throw new Error('books response was not ok');
    }
}

export const getBook = async(bookId: number): Promise<IBook> => {
    try {
        const fetchResponse = await fetch(`https://freetestapi.com/api/v1/books/${bookId}`);
        const response = await fetchResponse.json();
        return response;
    } catch(err) {
        throw new Error('book response was not ok');
    }
}