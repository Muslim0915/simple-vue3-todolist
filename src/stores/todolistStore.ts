import { reactive } from "vue";
import { defineStore } from "pinia";
import { ITodoItem } from "@/services/typing/interfaces/ITodoItem.ts";
import { useLocalStorage } from "@/composables/useLocalStorage.ts";

export const useTodolistStore = defineStore('todolist', () => {
    const state = reactive({
        todos: useLocalStorage().getItem('todos') || [] as ITodoItem[],
    });
    const updateLocalStorage = () => useLocalStorage().setItem('todos', state.todos);
    return {
        state,
        updateLocalStorage,
    }
})