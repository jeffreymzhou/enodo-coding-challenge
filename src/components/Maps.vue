<template>  
   <div>
       <h1>Map</h1>
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
 let africa = [1,1];

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
     this.$markers = []
     this.$map = new google.maps.Map(document.getElementById('map'), {
       center: new google.maps.LatLng(this.latitude, this.longitude),
       zoom: this.zoom
     });
    Vue.nextTick().then(()=>{
       this.clearMarkers();
     });
   },
   created(){
     EventBus.$on('clear-markers', () =>{
       console.log("eventbus clear markers activated")
       this.clearMarkers();
       this.$markers = [];
     });
     EventBus.$on('add-marker', (data) =>{
       console.log("eventbus add markers activated")
       let marker = this.makeMarker(data.latitude, data.longitude);
       this.$markers.push(marker);
     })
   },
   data(){
       return {

       };
   },
   methods: {
     makeMarker(latitude, longitude) {
       console.log("makeMarker-onmaps invoked")
       var new_marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        icon:{
        path: 'M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z',
        fillOpacity: 1.0,
        strokeColor: '#000000',
        strokeWeight: 1,
        scale: 0.75,
        fillColor: '#FFFF00',
        anchor: new google.maps.Point(12, 24),
        },
        map: this.$map,
        title: "new marker"
      })
      var infowindow =  new google.maps.InfoWindow({
		  content: 'info 123'
      });
  //    google.maps.event.addListener(new_marker, 'click', function() { 
	//	    infowindow.setContent("this works");
	//	    infowindow.open(map, new_marker); 
  //    }); 
      new_marker.addListener('mouseover', function() {
        infowindow.setContent("this works");
        infowindow.open(map, new_marker);
      });
      // assuming you also want to hide the infowindow when user mouses-out
      new_marker.addListener('mouseout', function() {
        infowindow.close();
      });
      return new_marker;
     },
     clearMarkers(){
       console.log("clearMarkers-onmaps invoked")
       for(let i = 0; i < this.$markers.length; i++){
         this.$markers[i].setMap(null);
       }
     },
     
   }
 }
</script>  