import { api_key, base_url } from '../config';

export class Movie {
    constructor(id) {
        this.id = id;
    }

    async GetMovie() {
        const response = await fetch(`${base_url}/movie/${this.id}?api_key=${api_key}`);
        this.data = await response.json();
        console.log(this.data);
    }
}