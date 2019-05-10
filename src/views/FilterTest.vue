<template>
  <div>
    <h1>
        FILTER TEST
    </h1>
    <div class="row">
      <div class="col-md-3">
        Side column
      </div>
      <div class="col-md-9">
        <FilterTestTable/>
      </div>
      
    </div>
  </div>
</template>




<script>
import FilterTestTable from '@/components/FilterTestTable'


export default {
  components: {
    'FilterTestTable': FilterTestTable
  }
  
}
</script>
