const axios = require("axios");
const API = "http://localhost:8080/api";

class TickerService {

    getMovie(inputParameters) {
        console.log(inputParameters.title)
        return axios.get(API + "/movies/" + inputParameters.title);
    }

    getAllMovies() {
        return axios.get(API + "/movies");
    }

}

export default new TickerService();