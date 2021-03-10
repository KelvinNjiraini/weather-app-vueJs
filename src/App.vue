<template>
  <div class="flex flex-col items-center py-10 px20 bg-yellow-600 h-screen">
    <form class=" pb-10" v-on:submit.prevent="getCity">
      <input type="text" placeholder="Type in the city here..." class=" text-lg focus:outline-none rounded py-2 px-4" v-model="cityName">
    </form>
    <div class=" h-96 w-72 bg-green-500 rounded">
      
    </div>
  </div>
</template>

<script>
import weatherStackapi from './api/weatherStackapi';
export default {
  name: 'App',
  data() {
    return{
      cityName: "",
      weatherDetails: null
    }
  },
  methods: {
    async getCity(){
      await weatherStackapi.getWeather(this.cityName);
    }
  }
}
</script>
