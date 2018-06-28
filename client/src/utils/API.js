import axios from "axios";

export default {
    scrapeHome: function() {
        return axios.post("/scrape");
    },

    scrapeSection: function(section) {
        return axios.post(`/scrape/${section}`);
    },

    viewSaved: function() {
        return axios.get("/articles");
    },

    viewSpecificSaved: function(id) {
        return axios.get(`/article/${id}`);
    }
};