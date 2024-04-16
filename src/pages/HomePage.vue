<!-- eslint-disable no-console -->
<script setup>
import { computed, onMounted } from 'vue';
import { artService } from '../services/ArtService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import Artcard from '../components/Artcard.vue';

const artworks = computed(() => AppState.artworks)
const currentPage = computed(() => AppState.currentPage)
const maxPages = computed(() => AppState.maxPages)

onMounted(() =>
  getArt()
)

async function getArt() {
  try {
    await artService.getArt()
  } catch (error) {
    Pop.toast('Could not get art', 'error')
    console.error(error);
  }
}

async function changePage(inc) {
  try {
    await artService.changePage(inc)
  } catch (error) {
    Pop.toast('Could not change page', 'error')
    console.error(error);
  }
}

</script>

<template>
  <section class="row justify-content-around align-items-baseline text-center mt-2">
    <button :disabled="currentPage == 1" @click="changePage(currentPage - 1)" class="btn btn-dark m-1 col-2">Previous
      Page</button>

    <p class="col-2 text-light">Page: {{ currentPage }}</p>

    <button :disabled="currentPage == maxPages" @click="changePage(currentPage + 1)" class="btn btn-dark m-1 col-2">Next
      Page</button>
  </section>
  <hr>
  <div class="text-light">
    <div class="row justify-content-around">
      <Artcard v-for="art in artworks" :key="art.id" :art="art"
        class="col-3 artborder m-2 p-1 d-flex justify-content-center" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.artborder {
  border: 10px;
  border-style: groove;
  border-radius: 2px;
  border-color: rgb(160, 114, 8);
}
</style>
