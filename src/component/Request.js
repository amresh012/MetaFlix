const key = '7b4ce59cfe8611f2be447794d68c3c21'

const request = {
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&launguage=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&launguage=en-US&page=1`,
    requestTrending : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&launguage=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&launguage=en-US&query=horror&page=1&nclude_adult=true`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&launguage=en-US&page=1`


};
export default request;