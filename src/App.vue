<template>
  <div class="app">
    <header class="header">
      <h1> Mini Cat Gallery</h1>
    </header>
    <Loader v-if="loading"/>
    <main class="container" v-else>
      <CatGallery :cats="cats" :error="error" @refresh="loadCats"/>
    </main>

    <footer class="footer">
      <small>
        Powered by
        <a href="https://www.linkedin.com/in/shkelqim-osmani-8206b5227/" target="_blank" rel="noopener">
          Shkelqim Osmani
        </a>
      </small>
    </footer>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {fetchCats} from './services/CatService';
import CatGallery from './components/CatGallery.vue';
import Loader from './components/Loader.vue';

const loading = ref(true);
const cats = ref([]);
const error = ref(null);

async function loadCats() {
  loading.value = true;
  error.value = null;
  cats.value = [];
  try {
    const data = await fetchCats(6);
    cats.value = data.slice(0, 6);
  } catch (err) {
    console.error(err);
    error.value = 'Failed to load cats. Please check your connection.';
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  loadCats();
});
</script>
