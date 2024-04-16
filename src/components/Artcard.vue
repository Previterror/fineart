<script setup>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Artwork } from '../models/Artwork.js';


defineProps({ art: Artwork })


</script>


<template>
    <img :src="art.thumb" :alt="art.id" class="img-fluid">
</template>


<style lang="scss" scoped></style>