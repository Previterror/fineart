import { AppState } from "../AppState.js";
import { Artwork } from "../models/Artwork.js";
import { api } from "./AxiosService.js"

class ArtService {

    async getArt() {
        let response = await api.get('api/artworks')
        console.log('response', response.data);
        AppState.artworks = response.data.artworks.map(art => new Artwork(art))
        console.log('appstate', AppState.artworks);
    }



}

export const artService = new ArtService