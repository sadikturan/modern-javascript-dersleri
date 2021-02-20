// api: <api_key>
// url: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/search/movie?api_key=<api_key>&language=en-US&page=1&include_adult=false


// model-view-controller


import Search from './models/Search';

const state = {};

const searchController = async () => {
    const keyword = document.getElementById('txt-keyword').value;

    if (keyword) {
        state.search =  new Search(keyword);

        await state.search.getResults();

        console.log(state.search.data);

    }else {
        alert('anahtar kelime girmelisiniz');
    }
}

document.getElementById('form-search').addEventListener('submit', function(e) {
    e.preventDefault();
    searchController();
    console.log("form submitted");
});