import type { IBook } from "@/types/books";

export const getBooks = async (searchText?: string): Promise<IBook[]> => {
    try {

        const query = searchText 
            ?  new URLSearchParams({
                search: String(searchText)
            })
            : '';

        const fetchResponse = await fetch(`https://freetestapi.com/api/v1/books?${query}`);
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