<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <Sidebar/>
        <br>
       <ListView/>
      </div>
      <div class="col-md-9">
        <Maps/>
      </div>
      
    </div>
  </div>
</template>




<script>
import Maps from '@/components/Maps'
import ListView from '@/components/ListView'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    'Maps': Maps,
    'Sidebar': Sidebar,
    'ListView': ListView
  }
  
}
</script>
