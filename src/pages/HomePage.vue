<script setup>
import { computed, onMounted } from 'vue';
import { artService } from '../services/ArtService.js';
import Pop from '../utils/Pop.js';
import { Artwork } from '../models/Artwork.js';
import { AppState } from '../AppState.js';

const artworks = computed(() => AppState.artworks)

onMounted(() =>
  getArt()
)

async function getArt() {
  try {
    await artService.getArt()
  } catch (error) {
    Pop.toast('Could not get art', 'error')
  }
}
</script>

<template>
  <div class="text-light">
    Some art goes here
    <div class="row justify-content-around">
      <div v-for="art in artworks" :key="art.id"
        class="col-3 border border-4 border-info rounded m-2 p-1 d-flex justify-content-center">
        <img :src="art.thumb" :alt="art.id" class="img-fluid">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
