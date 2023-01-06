
import axios from "axios";
import { fetchRecommendations, Mock_PopularTvShow } from "./Mock_Data";
import { SMALL_IMG_COVER_BASE_URL,BASE_URL,API_KEY } from "../config.js"

export class TvShowApi{

    static async fetchPopulars(){
        let response = await axios.get(`${BASE_URL}tv/popular${API_KEY}`);
        return response.data.results;
    }

    static async fetchRecommendations(tvShowId){
        let response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY}`);

        

        return response.data.results;
    }

    static async fetchByTitle(title){
        console.log("call fetchByTitle");
        let url = `${BASE_URL}search/tv/${API_KEY}&query=${title}`;
        console.log(url);
        let response = await axios.get(url);
        let filerResponse = response.data.results.filter((movie)=> movie.backdrop_path != null)

        console.log(filerResponse);


        return filerResponse;
    }
}