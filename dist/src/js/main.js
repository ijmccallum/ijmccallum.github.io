//rollup -> babel -> browser :)
//UI
import scrollToLinks from './components/scrollto-links.js';
//geolocate!
import geoLocation from './components/geolocation.js';


//init UI
scrollToLinks.init();

if (disputeGlobals.hasZipLookup) {
    geoLocation.init();
}
