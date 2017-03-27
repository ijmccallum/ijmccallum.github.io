"use strict";function latLngToZip(e){var t="http://maps.googleapis.com/maps/api/geocode/json?latlng="+e.latitude+","+e.longitude+"&sensor=true";$.ajax({url:t}).done(function(e){try{var t=e.results[0].address_components[7].short_name;eventManager.fire("zip_geolocated",t)}catch(e){}})}function getLatLng(){if(!("geolocation"in navigator))return!1;navigator.geolocation.getCurrentPosition(function(e){latLngToZip(e.coords)},function(e){console.log("geolocation error: ",e)},{timeout:5e3})}var scrollToLinks={init:function(){$('a[href*="#"]:not([href="#"])').on("click tap",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){"#zip-lookup"==this.hash&&$("#js-zip-input").focus();var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top},250),!1}})}},eventSubscribers={},addSubscriber=function(e,t){eventSubscribers[e]?eventSubscribers[e].push(t):eventSubscribers[e]=[t]},eventManager={subscribe:function(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)addSubscriber(e[n],t);else addSubscriber(e,t)},unsubscribe:function(e,t){eventSubscribers[e].splice(t,1)},fire:function(e,t){if(console.log("EVENT:",e,t),eventSubscribers[e])for(var n=0;n<eventSubscribers[e].length;n++)eventSubscribers[e][n](t)}},isZipAlreadySet=!1;eventManager.subscribe("zip_set",function(){isZipAlreadySet=!0});var geoLocation={init:function(){isZipAlreadySet||getLatLng()}};scrollToLinks.init(),disputeGlobals.hasZipLookup&&geoLocation.init();
