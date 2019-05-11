<template>
    <div class="container">
        <h1>
            + Markers
        </h1>
        <input 
            name="lat" 
            type="number" 
            step="0.0001" 
            class="form-control" 
            placeholder="latitude"
            v-model="latitude">
        <input 
            name="long" 
            type="number" 
            step="0.0001" 
            class="form-control" 
            placeholder="longitude"
            v-model="longitude">
        <br>
        <button @click="addMarker" class="btn btn-primary">
            Add
        </button>
        <button @click="clearMarkers" class="btn btn-danger">
            Clear All
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
        },
        clearMarkers(){
            EventBus.$emit('clear-markers')
        }
    }
}
</script>
