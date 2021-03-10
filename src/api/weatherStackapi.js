import axios from 'axios';

const key = '6027c86a865a3ead0c3793a6ee226b80';
const base_url = `http://api.weatherstack.com/current`;

export default {
    async getWeather(cityName){
        try {
            const cityDetails = await axios.get(base_url, {
                params : {
                query : cityName,
                access_key : key,
                units : 'm'
            }})
            console.log(cityDetails.data)    
        } catch (err) {
            console.log(err)
        }
    }
}
 
 
  