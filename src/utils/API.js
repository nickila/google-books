import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "key=AIzaSyCp0NoB6J6IUdy4C-YHKNl8aWqpqoEm2gQ";

export default {
    search: function(query) {
        return axios.get(BASEURL + query);
    }

}

// google api key: AIzaSyCp0NoB6J6IUdy4C-YHKNl8aWqpqoEm2gQ