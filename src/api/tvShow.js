
import axios from "axios";
import { Mock_PopularTvShow } from "./Mock_Data";

export class TvShowApi{

    static async fetchPopulars(){
        // let response = await axios.get(`${BASE_URL}tv/popular${API_KEY}`);

        // console.log(response.data.results);
        
        // return response.data.results;

        return Mock_PopularTvShow();
    }
}