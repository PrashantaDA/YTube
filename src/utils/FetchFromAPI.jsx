import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
     url: BASE_URL,
     params: {

          maxResults: '50'
     },
     headers: {
          'X-RapidAPI-Key': "7321697aadmsh1e7f2f166bab7ddp127378jsnab60ce29fc88",
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
     }
};

export const fetchFromAPI = async (url) => {
     const { data } = await axios.get(`${BASE_URL}/${url}`, options)
     return data

}