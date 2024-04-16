/* eslint-disable no-console */
import { AppState } from "../AppState.js";
import { Artwork } from "../models/Artwork.js";
import { api } from "./AxiosService.js"

class ArtService {
    async changePage(inc) {
        let response = await api.get(`api/artworks?page=${inc}`)
        // console.log('change page response', response.data);
        const arts = response.data.artworks.map(art => new Artwork(art))
        // console.log('arts', arts);
        AppState.artworks = arts
        AppState.currentPage = response.data.page
    }

    async getArt() {
        let response = await api.get('api/artworks')
        console.log('get response', response.data);
        AppState.artworks = response.data.artworks.map(art => new Artwork(art))
        // console.log('appstate', AppState.artworks);
        AppState.currentPage = response.data.page
        AppState.maxPages = response.data.pages
        console.log('page response', response.data.page)
        console.log('page state', AppState.currentPage);
    }



}

export const artService = new ArtService