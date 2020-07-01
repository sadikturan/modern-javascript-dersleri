import {elements} from '../base';

export const displayResults = data => {
    data.results.forEach(movie => {
        const html = `
            <p>${movie.title}</p>
        `;

        elements.searchResults.insertAdjacentHTML('beforeend', html);
    })
}