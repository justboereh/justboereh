<template>
  <div
    class="py-8 text-center text-sm -z-10 theendtext relative text-gray-100"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
@keyframes color {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.theendtext {
  animation: color 18s infinite linear;
  background: linear-gradient(45deg, #f79226, #ee2d30, #f79226, #ee2d30);
  background-size: 500% 500%;
}
</style>
