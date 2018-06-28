import axios from "axios";

export default {
  scrapeHome: function() {
    return axios.post("/scrape");
  },

  scrapeSection: function(section) {
    return axios.post(`/scrape/${section}`);
  }
};