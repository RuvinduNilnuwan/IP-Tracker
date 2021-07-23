<template>
  <div class="flex flex-col h-screen max-h-screen">

<div class="z-20 flex justify-center relative bg-hero-back bg-cover px-4 pt-8 pb-32">
    
    <div class="w-full max-w-screen-sm">
      <h1 class="text-white text-center text-3xl pb-4">Track IP Address</h1>
      <div class="flex">
       <input 
       v-model="qeryIp"
       class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md" type="text" placeholder="Enter a address or just hit search for your ip address"/>
       <i @click="getIpInfo" class="cursor-pointer bg-black text-white px-4 rounded-tr-md rounded-br-md flex items-center fas fa-search-location"></i>  
      </div>
    </div>
 <!--  ip indo-->
 <IPInfo v-if="IpInfo" v-bind:IpInfo="IpInfo"/>

  </div>
   <div id="mapid" class="h-full z-10"></div>

  </div>
</template>

<script>
// @ is an alias to /src
import IPInfo from "../components/ipserupinfo.vue"
import leaflet from "leaflet";
import { onMounted, ref } from "vue";
import axios from 'axios';


export default {
  name: "Home",
  components: { IPInfo },
setup() {
  let mymap;
  const qeryIp = ref("");
  const IpInfo = ref(null);

  onMounted(() => {mymap = leaflet.map('mapid').setView([51.505, -0.09], 13);

  leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmlsbnV3YW4iLCJhIjoiY2tyZXdzbnV1MGo0MTJ1bzVwOTQ4eDEwaSJ9.zP9dQA3T6bHuBYEpPC8I1w', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibmlsbnV3YW4iLCJhIjoiY2tyZXdzbnV1MGo0MTJ1bzVwOTQ4eDEwaSJ9.zP9dQA3T6bHuBYEpPC8I1w'
}).addTo(mymap);
  });
   
   const getIpInfo = async () => {
     try{
       const data = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_qmPpbsw6DRgFhuGWMMVcTzJIalqjf&ipAddress=${qeryIp.value}`);
       const result = data.data;
       console.log (result);
       IpInfo.value= {
         address: result.ip,
         state: result.location.region,
         timezone: result.location.timezone,
         isp: result.isp,
         lat: result.location.lat,
         lng: result.location.lng,
         pst: result.location.city,
       };
       leaflet.marker([IpInfo.value.lat, IpInfo.value.lng]).addTo(mymap);
       mymap.setView([IpInfo.value.lat, IpInfo.value.lng], 13);

     }
     catch(err) {
       alert(err.message)
     }
   };
   return { qeryIp, IpInfo, getIpInfo };
},
  
};
</script>
