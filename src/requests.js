const API_KEY="368f90f546c8537846e0d17545536793";

const requests={
  fetchTrending: `/trending/all /week?api_key=${"368f90f546c8537846e0d17545536793"}&language=en-us`,
  fetchNetflixOrignals: `/discover/tv?api_key=${"368f90f546c8537846e0d17545536793"}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${"368f90f546c8537846e0d17545536793"}&language=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${"368f90f546c8537846e0d17545536793"}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${"368f90f546c8537846e0d17545536793"}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${"368f90f546c8537846e0d17545536793"}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${"368f90f546c8537846e0d17545536793"}&with_genres=10749`,
  fetchSciFiMovies: `/discover/movie?api_key=${"368f90f546c8537846e0d17545536793"}&with_genres=878`,
  fetchCrimeMovies: `/discover/movie?api_key=${"368f90f546c8537846e0d17545536793"}&with_genres=80`,
}
export default requests;