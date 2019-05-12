<template>
  <div class="container">
    <h1>
      COLOR GRADIENT TEST
    </h1>
    <button class="btn btn-primary" @click="make_gradient">
      Generate Colors
    </button>
    <br><br>
    <b-form>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="range.max"
          required
          placeholder="enter range max"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="range.min"
          required
          placeholder="enter range min"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="num"
          required
          placeholder="enter number"
        ></b-form-input>
      </b-form-group>
    </b-form>
    <br>
    <div class="row">
      <h2>
        Your Color: {{ color }}
      </h2>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div id="colors"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return{
      range:{ //ranges for red and green gradient
          min: "",
          max: ""
      },
      num: "",
      color: ""
    }
  },
  methods: {
    make_color(num){
      var min = parseInt(this.range.min)
      var max = parseInt(this.range.max)
      var middle = (min + max)/2
      if(num >= max){
        return '#00ff00'
      }
      if(num <= min){
        return '#ff0000'
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
      return '#' + rl + r_hex + gl + g_hex + '00'
    },
    make_gradient(){
      var html_colors = [];
      for(var i = this.range.min;i< this.range.max ;i++){
        html_colors.push("<div class='color' style='background-color:"+ this.make_color(i) +"; height: " + (400/(this.range.max - this.range.min)) + "px;'></div>");
      }
      document.getElementById("colors").innerHTML = html_colors.join('');
      this.color = this.make_color(this.num)
    }
  }
}
</script>

<style>
.color{
  width:100%;
}
#colors{
  height:400px;
}
</style>


