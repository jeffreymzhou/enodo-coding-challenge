<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <button @click="" class="btn btn-primary"> 
          Filter
        </button>

    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="input-group-2" label="est_market_val_min:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="filters.ESTIMATED_MARKET_VALUE.min"
          required
          placeholder="enter number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="est_market_val_max:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="filters.ESTIMATED_MARKET_VALUE.max"
          required
          placeholder="enter number"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
      </div>
      <div class="col-md-3">
        <h1>
          Data Table
        </h1>
        
        
        <b-table striped hover :items="data"></b-table>
      </div>
        
    </div>
  </div>
</template>



<script>
import { mapState } from 'vuex'
import XLSX from 'xlsx'

export default {
  data() {
    return {
      filters: {
        ESTIMATED_MARKET_VALUE: {
          min: null,
          max: null
        }
      }
    }
  },
  computed: {
    ...mapState([
      'sample',
      'data'
    ])
  },
  methods: {
    testfunction () {
      this.teststring = "test function works"
    },
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    },
    parse_xl_to_json () {
      var url = "data.xlsx";
      var parsed_data = {}
      /* set up async GET request */
      var req = new XMLHttpRequest();
      //var workbook = XLSX.readFile('data.xlsx');
      req.open("GET", url, true);
      req.responseType = "arraybuffer";

      req.onload = function() {
        var data = new Uint8Array(req.response);
        var workbook = XLSX.read(data, {type:"array"});

        /* DO SOMETHING WITH workbook HERE */


      var first_sheet_name = workbook.SheetNames[0];
      /* Get worksheet */
      var worksheet = workbook.Sheets[first_sheet_name];

      console.log(XLSX.utils.sheet_to_json(worksheet))
      
       
      };
      req.send();
    }
  }
}


</script>