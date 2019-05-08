<template>
  <div>
    <h1>
      Data Table
    </h1>
    <b-table striped hover :items="sample"></b-table>
  </div>
</template>



<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'sample'
    ])
  }
}
</script>