<template>
    <div class="book-card">
        <div class="book-image">
            <div class="shadow"  v-if="user.isAuthorized"></div>
            <img src="@/assets/img/placeholder.png" :alt="book.title">
            <div class="actions" v-if="user.isAuthorized">
                <div class="actions-btn">
                    <div 
                        @click="bookStatus.toggleBookStatus(book.id, BookStatus.TO_READ)" 
                        :class="['btn', 'to-read', {'status-is-active': statusIsActive(BookStatus.TO_READ)}]" 
                        title="Планирую прочесть">
                    </div>
                    <div 
                        @click="bookStatus.toggleBookStatus(book.id, BookStatus.IN_PROGRESS)" 
                        :class="['btn', 'in-progress', {'status-is-active': statusIsActive(BookStatus.IN_PROGRESS)}]" 
                        title="Читаю">
                    </div>
                    <div 
                        @click="bookStatus.toggleBookStatus(book.id, BookStatus.COMPLETED)" 
                        :class="['btn', 'completed', {'status-is-active': statusIsActive(BookStatus.COMPLETED)}]" 
                        title="Прочитал">
                    </div>
                </div>
            </div> 
        </div>
        <div class="book-content">
            <div>
                <h5>{{ book.title }}</h5>
                <span>{{ book.author }}</span>
            </div>
            <a class="book-button" href="">Подробнее</a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { IBook } from '@/types/books';
import { BookStatus } from '@/types/books';
import { useUserStore } from '@/stores/user';
import { useBookStatusStore } from '@/stores/bookStatus';

const user = useUserStore();
const bookStatus = useBookStatusStore();
const props = defineProps<{ book: IBook }>();

const statusIsActive = (status: BookStatus): boolean => {
    return bookStatus.getBookStatus(props.book.id) === status;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.book-card {
    display: flex;
    flex-direction: column;
    width: 200px;  
    margin: 0px 10px 30px;
    border: 1px solid #999999;
    border-radius: 10px;

    &:hover .shadow {
        opacity: 1;
    }

    &:hover .actions {
        bottom: 0;
        opacity: 1;
    }
}

.book-image {
    position: relative;
    overflow: hidden;

    .shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 8px 8px 0px 0px;
        opacity: 0;
        transition: .5s ease-in-out;
    }

    .actions {
        position: absolute;
        width: 100%;
        height: 45px;
        bottom: -45px;
        right: 0;
        opacity: 0;
        transition: .5s ease-in-out;
    }

    .actions-btn {
        float: right;

        .btn {
            display: inline-block;
            margin-left: 4px;
            padding: 5px;
            width: 45px;
            height: 45px;
            line-height: 45px;
            text-align: center;
            background: white;
            border-radius: 8px 8px 0px 0px;
            transition: .5s ease-in-out;
            cursor: pointer;

            &.status-is-active {
                background: $orange;
            }

            &:hover {
                background: $orange;
            }
        }

        .to-read:after {
            content: url('@/assets/img/to-read.png');
        }

        .in-progress:after {
            content: url('@/assets/img/in-progress.png');
        }

        .completed:after {
            content: url('@/assets/img/completed.png');
        }
    }
} 

.book-content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;

    h5 {
        margin: 0px 0px 10px;
    }
}

.book-button {
    display: block;
    margin-top: 10px;
    @include button;
}

</style>