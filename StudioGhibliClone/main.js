var platform = new H.service.Platform({
    'apikey': '{9tBohcSwD77N2cubG51tPc-PKuQ2r1CXejIL_0NS1yw}'
  });
  // configure an OMV service to use the `core` enpoint
var omvService = platform.getOMVService({path:  'v2/vectortiles/core/mc'});
var baseUrl = 'http://js.api.here.com/v3/3.1/styles/omv/oslo/japan/';

// create a Japan specific style
var style = new H.map.Style(`${baseUrl}normal.day.yaml`, baseUrl);

// instantiate provider and layer for the basemap
var omvProvider = new H.service.omv.Provider(omvService, style);
var omvlayer = new H.map.layer.TileLayer(omvProvider, {max: 22});

// instantiate (and display) a map:
var map = new H.Map(
    document.getElementById('mapContainer'),
    omvlayer,
    {
      zoom: 17,
      center: {lat: 35.68026, lng: 139.76744}
    });

    