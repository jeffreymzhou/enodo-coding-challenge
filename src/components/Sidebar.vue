<template>
    <div>
        <h1>
            Sidebar
        </h1>
        <input name="lat" type="number" step="0.0001" class="form-control" v-model="latitude">
        <input name="long" type="number" step="0.0001" class="form-control" v-model="longitude">
        <button @click="addMarker" class="btn btn-primary">
            Add marker
        </button>
        <button @click="clearMarkers" class="btn btn-danger">
            Clear Markers
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            latitude: EventBus.sanfrancisco[0],
            longitude: EventBus.sanrancisco[1]
        }
    },
    methods: {
        addmarker(){
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
