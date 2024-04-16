<script setup>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Artwork } from '../models/Artwork.js';
import { artService } from '../services/ArtService.js';
import Pop from '../utils/Pop.js';



defineProps({ art: Artwork })

async function admireArt(artId) {
    try {
        await artService.admireArt(artId)
    } catch (error) {
        Pop.toast('Unable to admire', 'error')
        console.error(error);
    }
}

function setActive(artId) {
    artService.setActive(artId)
}

</script>


<template>
    <div class="d-flex flex-column col-2 p-4 border rounded border-info">
        <div class="row justify-content-center">
            <img :src="art.thumb" :alt="art.id" role="button" @click="admireArt(art.id)"
                class="img-fluid artborder m-1 p-2 bg-light">
        </div>
        <div class="text-center">
            <RouterLink :to="{ name: 'ArtPage' }">
                <button @click="setActive(art.id)" class="btn btn-info">Learn More</button>
            </RouterLink>
        </div>
        <div>
            <span v-for="admirer in art.admirers" :key="art.admirers.admirer" :title="admirer.name">💚</span>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.artborder {
    border: 10px;
    border-style: groove;
    border-radius: 2px;
    border-color: rgb(160, 114, 8);
}
</style>