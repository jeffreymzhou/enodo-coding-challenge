<template>
  <div>
    <button class="btn btn-primary" @click="filter_method">
      Filter test 
    </button>
    <br><br>
     <b-form>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="num_filters.num.min"
          required
          placeholder="enter min"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="num_filters.num.max"
          required
          placeholder="enter max"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="type_filters.desc"
          required
          placeholder="enter desc"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="num_filters.price.min"
          required
          placeholder="enter price min"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2"  label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="num_filters.price.max"
          required
          placeholder="enter price max"
        ></b-form-input>
      </b-form-group>
    </b-form>
    <br>
    <h4>
      Filtered data:
    </h4>
    <b-table striped hover :items="filtered_test_data"></b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted(){
    this.filter_method()
  },
  data() {
    return{
      filtered_test_data: {},
      num_filters:{ //numerical filters (min and max)
        num:{
          min: "",
          max: ""
        },
        price:{
          min: "",
          max: ""
        }
      },
      type_filters:{ //categorical filters
        desc:""
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
    filter_all(p){

      var pass = true
      var num_filters = this.num_filters
      var type_filters = this.type_filters
    
      for(var filter in num_filters){ //filter all numerical values
        var min = num_filters[filter].min 
        var max = num_filters[filter].max
        var curr_val = p[filter]
        if(min.length > 0){ 
          if(curr_val < min){
            pass = false
            break
          }
        }
        if(max.length > 0){ 
          if(curr_val > max){
            pass = false
            break
          }
        }
      }

      for(var filter in type_filters){ //filter all categorical values
        var desired_str = type_filters[filter]
        var curr_str = p[filter]
        if(desired_str.length > 0){
          if(curr_str !== desired_str){
            pass = false
            break
          }
        } 

      }
      if(pass){ //final return
        return p
      }

    },
    filter_method(){
      console.log('filter method is called')
      this.filtered_test_data = this.filter_test_data.filter(this.filter_all)
    }
  }
}


</script>
