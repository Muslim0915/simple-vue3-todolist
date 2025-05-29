<script lang="ts" setup>
import { ITodoItem } from "@/services/typing/interfaces/ITodoItem.ts";
import AppButton from "@/components/ui/AppButton.vue";
import {useTodolistStore} from "@/stores/todolistStore.ts";
const todolistStore = useTodolistStore();

interface IProps {
  todo: ITodoItem,
}
defineProps<IProps>();

const deleteTodo = (id: number) => {
  todolistStore.state.todos = todolistStore.state.todos.filter((item: ITodoItem) => item.id !== id);
  todolistStore.updateLocalStorage();
}

const toggleChecked = (id: number) => {
  todolistStore.state.todos = todolistStore.state.todos.map((item: ITodoItem) => item.id === id ? {...item, isCompleted: !item.isCompleted} : item);
  todolistStore.updateLocalStorage();
}
</script>

<template>
  <div :class="{completed: todo.isCompleted}" class="todo__item" @click="toggleChecked(todo.id)">
    <h2 class="todo__title">{{ todo.title }}</h2>
    <div class="checkbox">
      <img
          v-if="todo.isCompleted"
          src="@/assets/images/png/checked.png"
          alt="checkbox"
          width="30"
          height="30"
      />
    </div>
    <AppButton class="reset__button" @click.stop="deleteTodo(todo.id)">Delete</AppButton>
  </div>
</template>

<style scoped lang="scss">
.todo__item{
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  border: 1px solid $primary-color;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: $primary-color;
  color: $color-white;
  &.completed{
    background-color: $orange-color;
    border: 1px solid $orange-color;
    .todo__title{
      text-decoration: line-through;
    }
  }
  .todo__title{
    font-size: 25px;
    line-height: 35px;
    text-transform: capitalize;
    flex: 1 1 0;
  }
}

</style>