<template>
  <div>
        <h1>
          Data Table
        </h1>
        
        
        <b-table striped hover :items="full_data"></b-table>
      
        
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
      'full_data'
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