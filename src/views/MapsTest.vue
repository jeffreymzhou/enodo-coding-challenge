<template>
  <div>
    <Maps/>
    <Sidebar/>
    <ListView/>
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
