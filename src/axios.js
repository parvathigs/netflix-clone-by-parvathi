import axios from "axios";

/**base url to make request to TMDB */

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

instance.get('/movie/latest')

export default instance