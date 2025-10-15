<template>
  <div>
    <div class="controls">
      <button class="btn" style="margin-right: 35px" @click="loadCats">
        Refresh Images
      </button>
    </div>
    <template v-if="error">
      <div class="message" >
        {{ error }}
        <button class="btn secondary"  @click="loadCats">Try again</button>
      </div>
    </template>
    <template v-else-if="cats.length">
      <div class="grid">
        <figure
            v-for="(cat, idx) in cats"
            :key="cat.id || idx"
            class="card"
            @click="openModal(cat)">
          <img
              :src="cat.url"
              :alt="'Cat ' + (cat.id || idx)"
              loading="lazy"
          />
          <div class="meta">
            Click to enlarge
          </div>
        </figure>
      </div>
    </template>


    <CatModal
        v-if="selectedCat"
        :cat="selectedCat"
        @close="selectedCat = null"
    />
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {fetchCats} from '../services/CatService';
import CatModal from './CatModal.vue';

const cats = ref([]);
const error = ref(null);
const selectedCat = ref(null);
const emit = defineEmits(['loading']);

async function loadCats() {
  emit('loading', true);
  error.value = null;
  cats.value = [];
  try {
    const data = await fetchCats(6);
    cats.value = data.slice(0, 6);
  } catch (err) {
    console.error(err);
    error.value = 'Failed to load cats. Please check your connection.';
    cats.value = [];
  } finally {
    emit('loading', false);
  }
}

function openModal(cat) {
  selectedCat.value = cat;
}

onMounted(() => loadCats());
</script>
