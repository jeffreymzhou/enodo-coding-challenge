<template>
    <div>
        <h1>
            Sidebar
        </h1>
        <input 
            name="lat" 
            type="number" 
            step="0.0001" 
            class="form-control" 
            v-model="latitude">
        <input 
            name="long" 
            type="number" 
            step="0.0001" 
            class="form-control" 
            v-model="longitude">
        <br>
        <button @click="addMarker" class="btn btn-primary">
            Add marker
        </button>
        <button @click="clearMarkers" class="btn btn-danger">
            Clear Markers
        </button>
        <button @click="printApiKey" class="btn btn-success">
            Print API Key
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            latitude: EventBus.sanfrancisco[0],
            longitude: EventBus.sanfrancisco[1]
        }
    },
    methods: {
        addMarker(){
            EventBus.$emit('add-marker', {
                latitude: this.latitude,
                longitude: this.longitude
            })
            console.log("addMarker invoked")
        },
        clearMarkers(){
            EventBus.$emit('clear-markers')
            console.log("clearMarkers invoked")
        },
        printApiKey(){
            console.log(config.GMAP_KEY)
        }
    }
}
</script>
