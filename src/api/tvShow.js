
import axios from "axios";
import { fetchRecommendations, Mock_PopularTvShow } from "./Mock_Data";
import { SMALL_IMG_COVER_BASE_URL,BASE_URL,API_KEY } from "../config.js"

export class TvShowApi{

    static async fetchPopulars(){
        let response = await axios.get(`${BASE_URL}tv/popular${API_KEY}`);

        //console.log(response.data.results);
        
        return response.data.results;

       /// return Mock_PopularTvShow();
    }

    static async fetchRecommendations(tvShowId){
        let response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY}`);

        //console.log(response.data.results);
        
        return response.data.results;

       //return fetchRecommendations();
    }
}