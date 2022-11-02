import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

const movieAxios = axios.create({
    baseURL: BASE_URL,
})

const buildendPoint = (str) => {
    return `${str}?api_key=${API_KEY}`
}

export const getTrendMovie = async () => {
    try {
        const response = await movieAxios.get(buildendPoint("/trending/movie/day"));
        return response.data.results;
    } catch (e) {
        throw new Error(e);
    }

};