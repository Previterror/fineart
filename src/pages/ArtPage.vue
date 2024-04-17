<script setup>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';

const active = AppState.activeArt


</script>


<template>
    <div class="row justify-content-center m-3 g-4">
        <div class="col-6">
            <img :src="active.full" alt="" class="img-fluid  bg-light p-3">
        </div>
        <div class="col-7 p-4 text-light fs-5 bg-dark border rounded">
            {{ active.description }}
        </div>
        <div v-for="admirer in active.admirers" :key="admirer.name">
            {{ admirer.name }}
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