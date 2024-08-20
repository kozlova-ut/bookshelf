export interface IBooks {
    id: number,
    title: string,
    author: string,
    publication_year: number,
    genre: string[],
    description: string,
    cover_image: string
    status?: BookStatus
}

export enum BookStatus {
    TO_READ = 'TO_READ',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED'
}