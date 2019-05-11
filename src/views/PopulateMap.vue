<template>  
   <div>
       <h1>Populate Map</h1>
    <button @click="populateMap" class="btn btn-primary">
        Populate
    </button>
    <br><br>
       <div id="map" class="h-full"></div>
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
   .h-full {
     height: 100vh;
   }
</style>  
<script>  
import { mapState } from 'vuex'


 let sanfrancisco = [37.782685, -122.411364];
 let africa = [1,1];
 let us_center = [38.526600,-96.726486]

 export default {
  props: {
    'latitude': {
      type: Number,
      default() {
        return us_center[0]
      }
    },
    'longitude': {
      type: Number,
      default() {
        return us_center[1]
      }
    },
    'zoom': {
      type: Number,
      default() {
        return 5
      }
    },
  },
  computed: {
    ...mapState([
      'sample',
      'data',
      'filter_test_data'
    ])
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
      range:{ 
          min: "0",
          max: "400"
        
      },
    };
  },
  methods: {
    make_color(num){
      var min = parseInt(this.range.min)
      var max = parseInt(this.range.max)
      var middle = (min + max)/2
      if(num >= max){
        return '#00ff77'
      }
      if(num <= min){
        return '#ff0077'
      }
      if(num >= middle){
        var g = 255
        var r = 255 - Math.round(((num-middle)/middle)*255)
      }else{
        var g = Math.round((num/middle)*255)
        var r = 255
      }
      var r_hex = Number(r).toString(16)
      var g_hex = Number(g).toString(16)
      var rl = ""
      var gl = ""
      if(r_hex.length === 1){
        rl = "0"
      }
      if(g_hex.length === 1){
        gl = "0"
      }
      return '#' + rl + r_hex + gl + g_hex + '77'
    },
    makeMarker(latitude, longitude, addr, colval) {
      console.log("makeMarker-onmaps invoked")
      var new_marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        icon:{
          path: 'M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z',
          fillOpacity: 1.0,
          strokeColor: '#000000',
          strokeWeight: 1,
          scale: 0.75,
          fillColor: this.make_color(colval),
          anchor: new google.maps.Point(12, 24),
        },
        map: this.$map,
        title: "new marker"
      })
      var infowindow =  new google.maps.InfoWindow({
		  content: ''
      });
      new_marker.addListener('mouseover', function() {
        infowindow.setContent(addr);
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
     populateMap(){
       var filter_test_data = this.filter_test_data
       for(var property in this.filter_test_data){ //loop through all properties
        var name = filter_test_data[property].name
        var longitude = filter_test_data[property].longitude
        var latitude = filter_test_data[property].latitude
        var colval = filter_test_data[property].price
        console.log(property + "| name: " + name + " | lat: " + latitude + " | long: " + longitude)
        this.makeMarker(latitude, longitude, name, colval)
      }
     }
   }
 }
</script>  
