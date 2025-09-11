<template>
  <div class="modal-overlay" @click="onOverlay">
    <div class="modal-content" @click.stop>
      <button class="close-btn" @click="close">✕</button>

      <div class="modal-inner">
        <img :src="cat.url" :alt="'Cat ' + cat.id"/>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div style="color:var(--muted); font-size:13px">ID: {{ cat.id }}</div>
        <a :href="cat.url" class="small-link" target="_blank" rel="noopener">Open original</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({cat: {type: Object, required: true}})
const emit = defineEmits(['close'])

function close() {
  emit('close')
}

function onOverlay(e) {
  if (e.target === e.currentTarget) close()
}
</script>
