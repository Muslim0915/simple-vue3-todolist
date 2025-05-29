<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button{
  padding: 10px 20px;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-size: 16px;
}
</style>
