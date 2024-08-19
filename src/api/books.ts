import type { IBooks } from "@/types/books";

export const getBooks = async (): Promise<IBooks[]> => {
    try {
        const fetchResponse = await fetch('https://freetestapi.com/api/v1/books');
        const response = await fetchResponse.json();
        return response;
    } catch(err) {
        throw new Error('books response was not ok');
    }
}