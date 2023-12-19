import Vue from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

// Store GM_instance as a window object (outside of the Vue context) to satisfy the GM plugin.
window.GM_instance = new Loader({
    apiKey: process.env.GOOGLEMAPSAPIKEY, // This must be set in nuxt.config.js
    version: "weekly",
    libraries: ["places", "drawing", "geometry"] // Optional GM libraries to load
})

Vue.mixin({

    data() {
        return {
            GM_loaded: false, // Tracks whether already GM loaded
            GM_instance: null // Holds the GM instance in the context of Vue; much more convenient to use *anywhere* (Vue templates or scripts) whereas directly accessing the window object within Vue can be problematic.
            GM_placeService: null, // Optional - Holds the GM Places service
        }
    },

    methods: {

        GM_load() {
            return new Promise( async (resolve, reject) => {

                // Need to do this only once
                if (!this.GM_loaded) {

                    // Load the GM instance
                    window.GM_instance.load()
                    .then((response) => {
                        this.GM_loaded = true
                        
                        // this.GM_instance is what we use to interact with GM throughout the Nuxt app
                        this.GM_instance = response

                        resolve()
                    })
                    .catch(e => {
                        reject(e)
                    })
                } else {
                    resolve()
                }
            })
        },

        // OPTIONAL FUNCTIONS:


        GM_loadPlaceService(map) {
            this.GM_placeService = new this.GM_instance.maps.places.PlacesService(map)
        },

        GM_getPlaceDetails(placeRequest) {
            return new Promise((resolve, reject) => {
                this.GM_placeService.getDetails(placeRequest, (response) => {
                    resolve(response)
                })
            })
        }
    }
});
