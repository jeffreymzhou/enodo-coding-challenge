<template>
  <div>
    <h1>
        FILTER TEST
    </h1>
    <div class="container">
        <FilterTestTable/>
    </div>
        
  </div>
</template>




<script>
import FilterTestTable from '@/components/FilterTestTable'
import FilterTestSidebar from '@/components/FilterTestSidebar'

export default {
  components: {
    'FilterTestTable': FilterTestTable,
    'FilterTestSidebar': FilterTestSidebar
  }
  
}
</script>
