<template>
  <div>
    <button class="btn btn-primary" @click="filter_method">
      Filter test 1
    </button>
    <button class="btn btn-primary" @click="filter_method_minmax">
      Filter test minmax
    </button>
     <b-form>
      <b-form-group id="input-group-2" label="min" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="filters.min"
          required
          placeholder="enter min"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="max" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="filters.max"
          required
          placeholder="enter max"
        ></b-form-input>
      </b-form-group>

      <!-- <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
    <br>
    <h4>
      Filtered data:
    </h4>
    <b-table striped hover :items="filtered_data"></b-table>
   <!-- <h4>
      Total data:
    </h4>
    <b-table striped hover :items="filter_test_data"></b-table>
  --></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return{
      dumbdata: [
        { name: "jeffrey",
          num: 1
        },
        { name: "ada",
          num: 2
        },
        { name: "chris",
          num: 3
        }
      ],
      filtered_data: {},
      filters:{
        min: "",
        max: ""
      }
    }
  },
  computed: {
    ...mapState([
      'sample',
      'data',
      'filter_test_data'
    ])
  },
  methods: {
    filter_method(){
      console.log('filter method is called')
      this.filtered_data = this.filter_test_data.filter((p) => {
        if(p.num === 2){
          return p
        }
      })
    },
    filter_num(p){
      var max = this.filters.max
      var min = this.filters.min
      if((max.length === 0 && min.length === 0)){ //nothing inputted
        return p;
      }
      if((max.length === 0)&&(min.length > 0)){ //max is not specified
        if(p.num >= min){
          return p
        }
      }else if((min.length === 0)&&(max.length > 0)){ //min is not specified
        if(p.num <= max){
          return p
        }
      }else{ //both are specified
        if((p.num <= max)&&(p.num >= min)){
          return p
        }
      }
      

    },
    filter_method_minmax(){
      console.log('filter method minmax is called')
      this.filtered_data = this.filter_test_data.filter(this.filter_num)
    }
  }
}


</script>
