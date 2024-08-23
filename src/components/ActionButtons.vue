<template>
    <div class="action-btns">
        <div 
            @click="myBooks.toggleBookStatus(book, BookStatus.TO_READ)" 
            :class="['btn', 'to-read', shapeClass,{'status-is-active': statusIsActive(BookStatus.TO_READ)}]" 
            title="Планирую прочесть">
        </div>
        <div 
            @click="myBooks.toggleBookStatus(book, BookStatus.IN_PROGRESS)" 
            :class="['btn', 'in-progress', shapeClass, {'status-is-active': statusIsActive(BookStatus.IN_PROGRESS)}]" 
            title="Читаю">
        </div>
        <div 
            @click="myBooks.toggleBookStatus(book, BookStatus.COMPLETED)" 
            :class="['btn', 'completed', shapeClass, {'status-is-active': statusIsActive(BookStatus.COMPLETED)}]" 
            title="Прочитал">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { IBook } from '@/types/books';
import { BookStatus } from '@/types/books';
import { Shape } from '@/types/service';
import { useMyBookStore } from '@/stores/myBooks';

const props = defineProps<{ book: IBook, btnShape: Shape }>();
const myBooks = useMyBookStore();

const statusIsActive = (status: BookStatus): boolean => {
    return myBooks.getBookStatus(props.book.id) === status;
}

const shapeClass = computed(() => {
    switch(props.btnShape) {
        case Shape.SQUARE :
            return 'shape-is-square';
        case Shape.TAB :
            return 'shape-is-tab';
        default: return '';
    }
})

</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.action-btns {
    display: inline-flex;
    gap: 4px;

    .btn {
        display: inline-block;
        padding: 5px;
        width: 45px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        background: white;
        transition: .5s ease-in-out;
        cursor: pointer;

        &.status-is-active {
            background: $orange;
        }

        &.shape-is-square {
            border-radius: 8px;
        }

        &.shape-is-tab {
            border-radius: 8px 8px 0px 0px;
        }

        &:hover {
            background: $orange;
        }
    }

    @include icons;
}
</style>