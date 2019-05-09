<template>  
   <div>
       <h1>Map is here</h1>
       <div id="map" class="h-500"></div>
   </div>
</template>

<style scoped>  
   #map {
       margin: 0 auto;
       background: gray;
   }
   .h-500 {
       height:500px;
   }
</style>  
<script>  
 let sanfrancisco = [37.782685, -122.411364];

 export default {
   props: {
     'latitude': {
       type: Number,
       default() {
         return sanfrancisco[0]
       }
     },
     'longitude': {
       type: Number,
       default() {
         return sanfrancisco[1]
       }
     },
     'zoom': {
       type: Number,
       default() {
         return 14
       }
     },
   },
   mounted() {
     this.$map = new google.maps.Map(document.getElementById('map'), {
       center: new google.maps.LatLng(this.latitude, this.longitude),
       zoom: this.zoom
     });
   },
   data(){
       return {};
   }
 }
</script>  