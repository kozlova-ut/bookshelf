<template>
    <div class="action-btns">
        <div 
            @click="bookStatus.toggleBookStatus(book.id, BookStatus.TO_READ)" 
            :class="['btn', 'to-read', shapeClass,{'status-is-active': statusIsActive(BookStatus.TO_READ)}]" 
            title="Планирую прочесть">
        </div>
        <div 
            @click="bookStatus.toggleBookStatus(book.id, BookStatus.IN_PROGRESS)" 
            :class="['btn', 'in-progress', shapeClass, {'status-is-active': statusIsActive(BookStatus.IN_PROGRESS)}]" 
            title="Читаю">
        </div>
        <div 
            @click="bookStatus.toggleBookStatus(book.id, BookStatus.COMPLETED)" 
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
import { useBookStatusStore } from '@/stores/bookStatus';

const props = defineProps<{ book: IBook, btnShape: Shape }>();
const bookStatus = useBookStatusStore();

const statusIsActive = (status: BookStatus): boolean => {
    return bookStatus.getBookStatus(props.book.id) === status;
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
</style>