<template>
  <div class="flex flex-col items-center py-10 px20 h-screen" :class="this.weatherDetails.isDay ?'day': 'night'">
    <h1 class=" text-4xl text-gray-800 pb-6">Weather in</h1>
    <form class=" pb-10" v-on:submit.prevent="getCity">
      <input type="text" placeholder="Type in the city here..." class=" text-lg focus:outline-none rounded-lg py-2 px-4 border border-gray-400 border-solid" v-model="citySearch">
    </form>
    <div class=" h-96 w-72 bg-gray-400 rounded-lg flex flex-col items-center justify-around shadow-2xl" v-if="visible">
      <p class=" text-xl">{{ this.weatherDetails.cityName }}</p>
      <p class=" text-3xl">&hellip;</p>
      <p class="text-xl">{{ this.weatherDetails.country }}</p>
      <span class="text-4xl">{{ this.weatherDetails.temperature }}<sup>o</sup><span class=" uppercase">C</span></span>
      <p>cloud like</p>
      <div class="flex justify-between">
        <div class=" mr-6">
          <span>{{ this.weatherDetails.feelslike }}</span>
          <p>feels like</p>
        </div>
        <div>
          <span>{{ this.weatherDetails.humidity }}%</span>
          <p>humidity</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return{
      citySearch: "",
      weatherDetails: {},
      visible: false    
    }
  },
  methods: {
    async getCity() {
      console.log(this.citySearch)
      const key = '6027c86a865a3ead0c3793a6ee226b80';
      const base_url = `http://api.weatherstack.com/current`;
      const response = await axios.get(base_url, {
        params : {
          query : this.citySearch,
          access_key : key,
          units : 'm'
      }})
      console.log(response.data)
      this.citySearch = ""
      this.weatherDetails.cityName = response.data.location.name
      this.weatherDetails.country = response.data.location.country
      this.weatherDetails.temperature = response.data.current.temperature
      this.weatherDetails.feelslike = response.data.current.feelslike
      this.weatherDetails.humidity = response.data.current.humidity
      this.weatherDetails.isDay = true

      const timeOfDay = response.data.current.is_day;

      if(timeOfDay.includes('n')) {
        this.weatherDetails.isDay = false 
      } else {
        this.weatherDetails.isDay = true
      }

      this.visible = true;
    }
  }
}
</script>
