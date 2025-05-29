<script lang="ts" setup>
const socialLinks = [
  {id: 1, src: '/images/svg/telegram.svg', href: 'https://t.me/qpaHaPuK'},
  {id: 2, src: '/images/svg/github.svg', href: 'https://github.com/Muslim0915'},
  {id: 3, src: '/images/svg/instagram.svg', href: 'https://www.instagram.com/muslim0915_/'},
]
</script>

<template>
  <div class="social__items">
    <a
        v-for="socialLink in socialLinks"
        :key="socialLink.id"
        :href="socialLink.href"
        class="social__link"
        target="_blank"
    >
      <img
          :src="socialLink.src"
          alt="socialLogo"
          height="24"
          width="24"
      >
    </a>
  </div>
</template>
<style scoped lang="scss">
.social__items{
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>