<template>
  <div class="row pl-4">
    <div class="col-md-2 pr-2 mt-2">
      <button class="btn btn-info" @click="filter_method">
        Apply Filters
      </button>
      <p>
{{ filtered_test_data.length }} results
      </p>
      <b-row class="my-1 mt-4">
        <b-col sm="12" class="text-center">
          <h5>
            Location
          </h5>
        </b-col>
      </b-row>
<!-- ZIP CODE -->
      <b-row class="my-1 mt-2">
        <b-col sm="6"  class="text-left">
          Zip Code: 
        </b-col>
        <b-col sm="6 ml-0 pl-0">
          <b-form-select v-model="type_filters.Zip" :options="options.zip" size="sm" class="mt-0"></b-form-select>
        </b-col>
      </b-row>
    
<!-- CLASS DESCRIPTION -->
     <b-row class="my-1 mt-2">
       <b-col sm="6"  class="text-left">
         Class Desc:
       </b-col>
       <b-col sm="6 ml-0 pl-0">
         <b-form-select v-model="type_filters.CLASS_DESCRIPTION" :options="options.class_desc" size="sm" class="mt-0"></b-form-select>
       </b-col>
     </b-row>
<!-- CITY -->

     <b-row class="my-1 mt-2">
       <b-col sm="6"  class="text-left">
         City:
       </b-col>
       <b-col sm="6 ml-0 pl-0">
         <b-form-input  value="Chicago" size="sm" class="mt-0" disabled>
         </b-form-input>
       </b-col>
     </b-row>

<!-- RES_TYPE -->
     <b-row class="my-1 mt-2">
       <b-col sm="6" class="text-left">
         RES Type:
       </b-col>
       <b-col sm="6 ml-0 pl-0">
         <b-form-select v-model="type_filters.RES_TYPE" :options="options.res_type" size="sm" class="mt-0"></b-form-select>
       </b-col>
     </b-row>
<!-- BLDG_USE -->
     <b-row class="my-1 mt-2">
       <b-col sm="6"  class="text-left">
         Building Use:
       </b-col>
       <b-col sm="6 ml-0 pl-0">
         <b-form-select v-model="type_filters.BLDG_USE" :options="options.bldg_use" size="sm" class="mt-0"></b-form-select>
       </b-col>
     </b-row>  

<!-- Prior Year -->
     <b-row class="my-1 mt-2">
       <b-col sm="6"  class="text-left">
         Prior year:
       </b-col>
       <b-col sm="6 ml-0 pl-0">
         <b-form-select v-model="type_filters.PRIOR_YEAR" :options="options.prior_year" size="sm" class="mt-0"></b-form-select>
       </b-col>
     </b-row>
<!-- Town -->
     <b-row class="my-1 mt-2">
       <b-col sm="6"  class="text-left">
         Town:
       </b-col>
       <b-col sm="6 ml-0 pl-0">
         <b-form-input  value="77" size="sm" class="mt-0" disabled>
         </b-form-input>
       </b-col>
     </b-row>

<!-- REC TYPE -->
     <b-row class="my-1 mt-2">
       <b-col sm="6"  class="text-left">
         REC Type:
       </b-col>
       <b-col sm="6 ml-0 pl-0">
         <b-form-input  value="A-HD" size="sm" class="mt-0" disabled>
         </b-form-input>
       </b-col>
     </b-row>

<!-- EXT DESC -->
     <b-row class="my-1 mt-2">
       <b-col sm="6"  class="text-left">
         Ext Desc:
       </b-col>
       <b-col sm="6 ml-0 pl-0">
         <b-form-select v-model="type_filters.EXT_DESC" :options="options.ext_desc" size="sm" class="mt-0"></b-form-select>
       </b-col>
     </b-row>
<!-- BSMT_DESC: -->
     <b-row class="my-1 mt-2">
       <b-col sm="6"  class="text-left">
         Bsmt Desc:
       </b-col>
       <b-col sm="6 ml-0 pl-0">
         <b-form-select v-model="type_filters.BSMT_DESC" :options="options.bsmt_desc" size="sm" class="mt-0"></b-form-select>
       </b-col>
     </b-row>
<!-- ATTIC_DESC: -->
     <b-row class="my-1 mt-2">
       <b-col sm="6"  class="text-left">
         Attic Desc:
       </b-col>
       <b-col sm="6 ml-0 pl-0">
         <b-form-select v-model="type_filters.ATTIC_DESC" :options="options.attic_desc" size="sm" class="mt-0"></b-form-select>
       </b-col>
     </b-row>
<!-- GAR_DESC: -->
     <b-row class="my-1 mt-2">
       <b-col sm="6"  class="text-left">
         Gar Desc:  
       </b-col>
       <b-col sm="6 ml-0 pl-0">
         <b-form-select v-model="type_filters.GAR_DESC" :options="options.gar_desc" size="sm" class="mt-0"></b-form-select>
       </b-col>
     </b-row>

<!-- APPEAL_A_STATUS: -->
     <b-row class="my-1 mt-2">
       <b-col sm="6"  class="text-left">
         Appeal A Status: 
       </b-col>
       <b-col sm="6 ml-0 pl-0">
         <b-form-select v-model="type_filters.APPEAL_A_STATUS" :options="options.appeal_a_status" size="sm" class="mt-0"></b-form-select>
       </b-col>
     </b-row>
<!-- Appeal A Reason: -->
     <b-row class="my-1 mt-2">
       <b-col sm="6"  class="text-left">
         Appeal A Result: 
       </b-col>
       <b-col sm="6 ml-0 pl-0">
         <b-form-select v-model="type_filters.APPEAL_A_RESULT" :options="options.appeal_a_result"  size="sm" class="mt-0"></b-form-select>
       </b-col>
     </b-row> 
  

numerical:





<!-- SALE_AMOUNT -->
     <b-row class="ml-1 mt-2">
       Sale Amount:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.SALE_AMOUNT.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.SALE_AMOUNT.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- UNITS_TOT-->
     <b-row class="ml-1 mt-2">
       Units Tot:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.UNITS_TOT.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.UNITS_TOT.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>

<!-- ESTIMATED_MARKET_VALUE -->
     <b-row class="ml-1 mt-2">
       Estimated Market Value
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.ESTIMATED_MARKET_VALUE.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.ESTIMATED_MARKET_VALUE.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>


<!-- PIN  -->
     <b-row class="ml-1 mt-2">
       PIN:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.PIN.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.PIN.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- VOLUME -->
     <b-row class="ml-1 mt-2">
       Volume:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.VOLUME.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.VOLUME.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- BUILDING_SQ_FT -->
     <b-row class="ml-1 mt-2">
       Building sq ft
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.BUILDING_SQ_FT.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.BUILDING_SQ_FT.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- LAND_SQ_FT -->
     <b-row class="ml-1 mt-2">
       Land sq ft:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.LAND_SQ_FT.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.LAND_SQ_FT.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- AGE  -->
     <b-row class="ml-1 mt-2">
       Age
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.AGE.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.AGE.max"  size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>

<!-- CURRENT_LAND-->
     <b-row class="ml-1 mt-2">
       Current Land:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.CURRENT_LAND.min"  size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.CURRENT_LAND.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- CURRENT_BUILDING-->
     <b-row class="ml-1 mt-2">
       Current Building:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.CURRENT_BUILDING.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.CURRENT_BUILDING.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- CURRENT_TOTAL -->
     <b-row class="ml-1 mt-2">
       Current Total:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.CURRENT_TOTAL.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.CURRENT_TOTAL.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- PRIOR_LAND -->
     <b-row class="ml-1 mt-2">
       Prior Land:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.PRIOR_LAND.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.PRIOR_LAND.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- PRIOR_BUILDING-->
     <b-row class="ml-1 mt-2">
       Prior Building:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.PRIOR_BUILDING.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.PRIOR_BUILDING.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- PRIOR_TOTAL -->
     <b-row class="ml-1 mt-2">
       Prior Total:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.PRIOR_TOTAL.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.PRIOR_TOTAL.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- BLDG_SF-->
     <b-row class="ml-1 mt-2">
       Building SF:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.BLDG_SF.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.BLDG_SF.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- APPEAL_A_PROPAV: -->
     <b-row class="ml-1 mt-2">
       Appeal A PROPAV:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.APPEAL_A_PROPAV.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.APPEAL_A_PROPAV.max" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- APPEAL_A_CURRAV: -->
     <b-row class="ml-1 mt-2">
       Appeal A CURRAV:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.APPEAL_A_CURRAV.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.APPEAL_A_CURRAV.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>

<!-- APPEAL_A: -->
     <b-row class="ml-1 mt-2">
       Appeal A:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.APPEAL_A.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.APPEAL_A.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- MULTI_SALE  -->
     <b-row class="ml-1 mt-2">
       Multi Sale:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.MULTI_SALE.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.MULTI_SALE.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- DEED_TYPE  -->
     <b-row class="ml-1 mt-2">
       Deed Type:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.DEED_TYPE.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.DEED_TYPE.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- APPCNT  -->
     <b-row class="ml-1 mt-2">
       Appcnt:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.APPCNT.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.APPCNT.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- APPEAL_A_REASON  -->
     <b-row class="ml-1 mt-2">
       Appeal A Reason:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.APPEAL_A_REASON.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.APPEAL_A_REASON.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- OVACLS  -->
     <b-row class="ml-1 mt-2">
       OVA CLS:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.OVACLS.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.OVACLS.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- TAX_CODE -->
     <b-row class="ml-1 mt-2">
       Tax Code:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.TAX_CODE.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.TAX_CODE.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- NEIGHBORHOOD -->
     <b-row class="ml-1 mt-2">
       Neighborhood:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.NEIGHBORHOOD.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.NEIGHBORHOOD.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- APT_DESC -->
     <b-row class="ml-1 mt-2">
       Apt Desc:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.APT_DESC.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.APT_DESC.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- COMM_UNITS-->
     <b-row class="ml-1 mt-2">
       Comm Units:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.COMM_UNITS.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.COMM_UNITS.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- FULL_BATH-->
     <b-row class="ml-1 mt-2">
       Full Bath:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.FULL_BATH.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.FULL_BATH.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- HALF_BATH-->
     <b-row class="ml-1 mt-2">
       Half Bath:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.HALF_BATH.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.HALF_BATH.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- AC-->
     <b-row class="ml-1 mt-2">
       AC:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.AC.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.AC.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>
<!-- FIREPLACE:-->
     <b-row class="ml-1 mt-2">
       Fireplace:
     </b-row>
     <b-row class="my-1">
      
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.FIREPLACE.min" size="sm" placeholder="Min"></b-form-input>
       </b-col>
       <b-col sm="6">
         <b-form-input id="input-none" v-model="num_filters.FIREPLACE.max" size="sm" placeholder="Max"></b-form-input>
       </b-col>
     </b-row>  


     
    </div>
    <div class="col-md-10">
      
      <div id="map" class="h-full"></div>
    </div>
    <b-table striped hover :items="filtered_test_data"></b-table>
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
let chicago_center = [41.8781, -87.6298]
 export default {
props: {
  'latitude': {
    type: Number,
    default() {
      return chicago_center[0]
    }
  },
  'longitude': {
    type: Number,
    default() {
      return chicago_center[1]
    }
  },
  'zoom': {
    type: Number,
    default() {
      return 14
    }
  },
},
computed: {
  ...mapState([
    'sample',
    'filter_test_data',
    'data'
  ])
},
mounted() {
  this.$markers = []
  this.$map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(this.latitude, this.longitude),
    zoom: this.zoom
  });
  this.filtered_test_data=this.data //set filtered data to all data
  this.populateMap(); //prepopulate map with all properties
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
    options: {
      zip:[
          { value: null, text: 'Any' },
          { value: '60607', text: '60607' },
          { value: '60608', text: '60608' },
          { value: '60612', text: '60612' },
          { value: '60614', text: '60614' },
          { value: '60616', text: '60616' },
          { value: '60618', text: '60618' },
          { value: '60622', text: '60622' }
        ],
      class_desc:[
        { value: null, text: 'Any'},
        { value: 'Two to Six Apartments, Over 62 Years', text: 'Two to Six Apartments, Over 62 Years' },
        { value: 'Mixed commercial/residential building, 6 units or less, sq ft less than 20,000                                    ', text: 'Mixed commercial/residential building, 6 units or less, sq ft less than 20,000'},
        { value: 'Two or three story non-fireproof corridor apartments,or california type apartments, interior entrance                         ', text: 'Two or three story non-fireproof corridor apartments,or california type apartments, interior entrance'},
        { value: 'Two or three story non-frprf. crt. and corridor apts or california type apts, no corridors, ex. entrance                       ', text: 'Two or three story non-frprf. crt. and corridor apts or california type apts, no corridors, ex. entrance'},
        { value: 'Mixed use commercial/residential with apts. above seven units or more or building sq. ft. over 20,000', text: 'Mixed use commercial/residential with apts. above seven units or more or building sq. ft. over 20,000'},
        // 2 or 3 story bldng, 7 or more units, sngle devel., 1 or more contig. parcels, in common ownership                           
        // Rental mdrn row houses, 7 or more unts in a sing. dvlpment or 1 or more contig. prcls in comm. ownrshp                        
        // Rented mdrn row houses, 7 or more units in a single develop. or 1 or more contig. parcels in cmn. ownshp.                       
        // Special residential improvements                                                                                                                                             
      ],
      res_type: [
        { value: null, text: 'Any'},
        { value: 'Two Story        ', text: 'Two Story'},
        { value: 'Three Story       ', text: 'Three Story'},
        { value: '1.5 - 1.9 ', text: '1.5 - 1.9'}
      ],
      bldg_use: [
        { value: null, text: 'Any'},
        { value: 'Multi Family  ', text: 'Multi Family'}

      ],
      prior_year:[
        { value: null, text: 'Any'},
        { value: '2013', text: '2013'}
      ],
      ext_desc: [
        { value: null, text: 'Any'},
        { value: 'Frame', text: 'Frame'},
        { value: 'Masonry', text: 'Masonry'},
        { value: 'Stucco', text: 'Stucco'}
      ],
      bsmt_desc: [
        { value: null, text: 'Any'},
        { value: 123, text: '5'}
      ],
      attic_desc: [
        { value: null, text: 'Any'},
        { value: 123, text: '4'}
      ],
      gar_desc: [
        { value: null, text: 'Any'},
        { value: 123, text: '3'}
      ],
      appeal_a_status: [
        { value: null, text: 'Any'},
        { value: 123, text: '2'}
      ],
      appeal_a_result: [
        { value: null, text: 'Any'},
        { value: 123, text: '1'}
      ],
    },
    range:{ //for color calibration
        min: "400000",
        max: "900000"
      
    },
    filtered_test_data: {},
      num_filters:{ //numerical filters (min and max)
        ESTIMATED_MARKET_VALUE:{
          min: "",
          max: ""
        },
        TAX_CODE:{
          min: "",
          max: ""
        },
        OVACLS:{
          min: "",
          max: ""
        },
        PIN:{
          min: "",
          max: ""
        },
        CURRENT_LAND:{
          min: "",
          max: ""
        },
        CURRENT_BUILDING:{
          min: "",
          max: ""
        },
        CURRENT_TOTAL:{
          min: "",
          max: ""
        },
        PRIOR_LAND:{
          min: "",
          max: ""
        },
        PRIOR_BUILDING:{
          min: "",
          max: ""
        },
        PRIOR_TOTAL:{
          min: "",
          max: ""
        },
        VOLUME:{
          min: "",
          max: ""
        },
        NEIGHBORHOOD:{
          min: "",
          max: ""
        },
        APT_DESC:{
          min: "",
          max: ""
        },
        COMM_UNITS:{
          min: "",
          max: ""
        },
        FULL_BATH:{
          min: "",
          max: ""
        },
        HALF_BATH:{
          min: "",
          max: ""
        },
        AC:{
          min: "",
          max: ""
        },
        FIREPLACE:{
          min: "",
          max: ""
        },
        AGE:{
          min: "",
          max: ""
        },
        BUILDING_SQ_FT:{
          min: "",
          max: ""
        },
        LAND_SQ_FT:{
          min: "",
          max: ""
        },
        BLDG_SF:{
          min: "",
          max: ""
        },
        UNITS_TOT:{
          min: "",
          max: ""
        },
        MULTI_SALE:{
          min: "",
          max: ""
        },
        DEED_TYPE:{
          min: "",
          max: ""
        },
        SALE_AMOUNT:{
          min: "",
          max: ""
        },
        APPCNT:{
          min: "",
          max: ""
        },
        APPEAL_A:{
          min: "",
          max: ""
        },
        APPEAL_A_REASON:{
          min: "",
          max: ""
        },
        APPEAL_A_PROPAV:{
          min: "",
          max: ""
        },
        APPEAL_A_CURRAV:{
          min: "",
          max: ""
        }
      },
      type_filters:{ //categorical filters
        Zip: null,
        CLASS_DESCRIPTION: null,
        RES_TYPE: null,
        BLDG_USE: null,
        PRIOR_YEAR: null,
        EXT_DESC: null,
        FULL_BATH: null,
        HALF_BATH: null,
        BSMT_DESC: null,
        ATTIC_DESC: null,
        GAR_DESC: null,
        APPEAL_A_STATUS: null,
        APPEAL_A_RESULT: null,
      }
  };
},
methods: {
  filter_all(p){ //filter all properties
    if(this.filter_pass(p)){
      return p;
    }
  },

    filter_pass(p){ //filter individual property; returns true if pass, returns false if not-pass

      var num_filters = this.num_filters
      var type_filters = this.type_filters
    
      for(var filter in num_filters){ //filter all numerical values
        var min = num_filters[filter].min 
        var max = num_filters[filter].max
        var curr_val = p[filter]
        console.log("made it into forloop")
        console.log(curr_val)
        if(curr_val.length === 0){ 
            return false;
        } 
        if(min.length > 0){ 
          if(curr_val < min){
            return false;
          }
        }
        if(max.length > 0){ 
          if(curr_val > max){
            return false;
          }
        }
      }

  /*    for(var filter in type_filters){ //filter all categorical values
        var desired_str = type_filters[filter]
        var curr_str = p[filter]
        if(desired_str.length > 0){
          if(curr_str !== desired_str){
            return false;
          }
        } 

      } */
      return true;

    },
    filter_method(){ //refreshes the map
      console.log('filter method is called')
      this.filtered_test_data = this.data.filter(this.filter_all)
      this.clearMarkers();
      this.populateMap();
    },
  make_color(num){ // returns hex color from number
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
        //path: 'M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z',
        fillOpacity: 1.0,
        strokeColor: '#000000',
        strokeWeight: 0.5,
        scale: 0.73,
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
    this.$markers.push(new_marker);
    return new_marker;
    },
    clearMarkers(){
      console.log("clearMarkers invoked")
      for(let i = 0; i < this.$markers.length; i++){
        this.$markers[i].setMap(null);
      }
      this.$markers = [];
    },
    populateMap(){
      console.log("populateMaps invoked")
      var data = this.filtered_test_data
      for(var property in this.data){ //loop through all properties
      console.log(data[property])
      var name = data[property].Full_Address
      var longitude = data[property].Latitude //mixup in excel sheet data (lat switched with long)
      var latitude = data[property].Longitude
      var colval = data[property].ESTIMATED_MARKET_VALUE
      console.log(property + "| name: " + name + " | lat: " + latitude + " | long: " + longitude)
      this.makeMarker(latitude, longitude, name, colval)
    }
    }
  }
}
</script>  
