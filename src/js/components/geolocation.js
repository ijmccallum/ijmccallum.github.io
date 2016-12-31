"use strict";
import eventManager from './eventManager.js';

/* Gets the lat long
 * turns it into a ZIP
 * Adds that ZIP to the input ('#js-zip-input')
 */

let isZipAlreadySet = false;

function latLngToZip(coords){
    let url = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&sensor=true`;
    $.ajax({
        url
    }).done(function(res){

        //google api response object is kind of intense - no idea if this will remain consistant or not
        try {
            let zip = res.results[0].address_components[7].short_name;
            eventManager.fire('zip_geolocated', zip);
        }
        catch(err){
            //didn't work, but don't let it stop the party
        }
    });
}

function getLatLng(){
    if (!("geolocation" in navigator)) {
        return false;
    }

    navigator.geolocation.getCurrentPosition(function(position){
        latLngToZip(position.coords);
    }, function(err){
        console.log("geolocation error: ", err);
    }, {timeout:5000});

}

eventManager.subscribe('zip_set', function(){
    isZipAlreadySet = true;
});

export default {
    init: function(){
        //goelocation want's a callback, for ease I'm just passing it above
        if (!isZipAlreadySet) {
            getLatLng();
        }
    }
}