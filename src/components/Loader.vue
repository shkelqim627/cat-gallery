<template>
  <div class="loader-overlay">
    <div class="loader"></div>
  </div>
</template>
<script setup></script>
<style scoped>

.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}


.loader {
  height: 80px;
  aspect-ratio: 1;
  padding: 10px;
  border-radius: 50%;
  box-sizing: border-box;
  position: relative;
  mask: conic-gradient(#000 0 0) content-box exclude, conic-gradient(#000 0 0);
  filter: blur(12px);
}


.loader:before {
  content: "";
  position: absolute;
  inset: 0;
  background: conic-gradient(#0000 35%, #C02942, #0000 65%);
  animation: l1 1.5s linear infinite;
}


@keyframes l1 {
  to {
    rotate: 1turn;
  }
}

</style>