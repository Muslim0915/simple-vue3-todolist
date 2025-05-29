<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import { useTodolistStore } from "@/stores/todolistStore.ts";
import {computed} from "vue";
import { ITodoItem } from "@/services/typing/interfaces/ITodoItem.ts";

const todolistStore = useTodolistStore();
const todos = computed(() => {
  return todolistStore.state.todos;
});
</script>

<template>
  <main>
    <div class="container">
      <div class="todo__items">
        <TodoItem
            v-if="todos.length > 0"
            v-for="todo in todos as ITodoItem[]"
            :key="todo.id"
            :todo="todo"
        />
        <h3 v-else>Todolist is empty</h3>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main{
  flex: 1 1 0;
}
.todo__items{
  display: flex;
  flex-direction: column;
  gap: 15px;
  h3{
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: $primary-color;
  }
}
</style>