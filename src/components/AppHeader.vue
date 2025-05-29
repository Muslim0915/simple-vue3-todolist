<script lang="ts" setup>
import AppInput from "@/components/ui/AppInput.vue";
import {ref} from "vue";
import AppButton from "@/components/ui/AppButton.vue";
import {useLocalStorage} from "@/composables/useLocalStorage.ts";
import {useTodolistStore} from "@/stores/todolistStore.ts";
import { ITodoItem } from "@/services/typing/interfaces/ITodoItem.ts";

const inputValue = ref('');
const todolistStore = useTodolistStore();
const local = useLocalStorage();

const addTodo = () => {
  if (inputValue.value.trim()) {
    const newTodo: ITodoItem = {
      id: Date.now(),
      title: inputValue.value,
      isCompleted: false
    };
    todolistStore.state.todos.push(newTodo);
    todolistStore.updateLocalStorage();
    inputValue.value = '';
  }
};
const resetTodo = () => {
  todolistStore.state.todos = [];
  local.removeItem('todos');
}
</script>

<template>
  <header>
    <div class="container">
      <h1 class="title">Todolist</h1>
      <form @submit.prevent>
        <div class="form-control">
          <AppInput v-model="inputValue" placeholder="Enter todo"/>
        </div>
        <AppButton type="submit" class="submit__button" @click="addTodo()">Submit</AppButton>
        <AppButton v-if="todolistStore.state.todos.length" type="reset" class="reset__button" @click="resetTodo()">Reset</AppButton>
      </form>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  text-transform: uppercase;
  color: $primary-color;
}

form {
  display: flex;
  align-items: center;
  gap: 10px;

  .form-control {
    flex: 1 1 0;
    border: 1px solid $primary-color;
    padding: 10px 20px;
    border-radius: 10px;
  }
}
</style>