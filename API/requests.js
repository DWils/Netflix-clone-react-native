const API_KEY = "91a96128f6c484d28229f4963ba66943";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=fr-FR`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
    fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28&language=fr-FR`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35&language=fr-FR`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27&language=fr-FR`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749&language=fr-FR`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99&language=fr-FR`,
}


export default requests;