<template>
  <footer class="footer">
    <div class="container">
    <p>© {{ new Date().getFullYear() }} My Todo App. All rights reserved.</p>
    <p>Developed by Muslim</p>
    <SocialIcons />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  background-color: $primary-color;
  color: white;
  text-align: center;
  font-weight: 500;
  border-top: 3px solid #004f54;
}
</style>
<script setup lang="ts">
import SocialIcons from "@/components/SocialIcons.vue";
</script>