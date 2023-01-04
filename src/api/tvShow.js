
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=8e9fdc66cd1585ab9ee181e27839b6eb"

export class TvShowApi{

    static async fetchPopulars(){
        let response = await axios.get(`${BASE_URL}tv/popular${API_KEY}`);

        console.log(response.data.results);
        
        return response.data.results;
    }
}