import axios from 'axios';

var API = {
    randomDog: function () {
        return axios.get("https://dog.ceo/api/breeds/image/random")
    },

    getDogBreeds: function (resbreed) {
        return axios.get("https://dog.ceo/api/breed/" + resbreed + "/images")
    },
    getBaseBreeds: function () {
       return axios.get("https://dog.ceo/api/breeds/list")
            
    }

}


export default API; 