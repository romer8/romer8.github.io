//-16.493164, -68.135101
//-16.517176, -68.127178
//-16.496250, -68.137223
var arrayMarkers=[];
var datalayer;


var map;


function initMap() {
  var map = L.map('map').setView([	40.730610,	-73.935242], 12);

  L.esri.basemapLayer('Topographic').addTo(map);


  // $.getJSON("verdes.json",function(data){
  //   // add GeoJSON layer to the map once the file is loaded
  //   datalayer=L.geoJson(data);
  //   datalayer.addTo(map);
  // });
  // let layer2= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-095c0b00b7f14cd29ee3b0bf6062c8c3/wms', {
  //     layers: 'geo_export_86f7ac01-110f-4461-abb0-7371a8b87924', //Title name
  //     format: 'image/png', //depends on what you want to load in
  //     transparent: true,
  //     opacity: 0.3,
  //
  //     }).addTo(map);
  // let layer1= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-095c0b00b7f14cd29ee3b0bf6062c8c3/wms', {
  //     layers: 'geo_export_f7570710-0dd0-44dd-8f47-0737dfe6ffa1', //Title name
  //     format: 'image/png', //depends on what you want to load in
  //     transparent: true,
  //
  //     }).addTo(map);
  var source = L.WMS.source("https://geoserver.hydroshare.org/geoserver/HS-095c0b00b7f14cd29ee3b0bf6062c8c3/wms");
  source.addTo(map);
  var layer1 = source.getLayer('layer1');
  var layer2 = source.getLayer('layer2');
  var layer3 = L.WMS.tileLayer("https://geoserver.hydroshare.org/geoserver/HS-095c0b00b7f14cd29ee3b0bf6062c8c3/wms", {
        layers: 'geo_export_f7570710-0dd0-44dd-8f47-0737dfe6ffa1',
        transparent: true,
        format:'image/png'
  });
  var layer4 = L.WMS.tileLayer("https://geoserver.hydroshare.org/geoserver/HS-095c0b00b7f14cd29ee3b0bf6062c8c3/wms", {
        layers: 'geo_export_86f7ac01-110f-4461-abb0-7371a8b87924',
        transparent: true,
        format:'image/png',
        opacity: 0.3
  });

  layer3.addTo(map);
  layer4.addTo(map);
  console.log(layer3);
  layer4.addEventListener("click",function(data){
    data.showFeatureInfo();
    console.log(data);
  })

  // layer1.bindPopup("hola");
  // layer2.bindPopup("hola3");
  //     $.ajax({
  //         url: "https://data.cityofnewyork.us/resource/ck6h-keyb.json",
  //         type: "GET",
  //         data: {
  //           "$limit" : 5000,
  //           "$$app_token" : "RtE2Bz0zkIHLRxGFthOlfUcqk"
  //         }
  //     }).done(function(data) {
  //       console.log(data);
  //       // let layer3 =L.geoJson(data);
  //       // layer3.addTo(map)
  //     });


}


initMap();
