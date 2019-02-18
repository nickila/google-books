import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    search: function(query) {
        return axios.get(BASEURL + query);
    },

    save: function(bookData) {
        //return axios.post("api/books", booksData);
    }

}

