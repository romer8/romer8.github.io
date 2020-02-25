//-16.493164, -68.135101
//-16.517176, -68.127178
//-16.496250, -68.137223
var arrayMarkers=[];
var datalayer;
var layer1;
var layer2;


var map;
function initMap() {
  var map = L.map('map').setView([-13.105689, -20.572956], 3);


  L.esri.basemapLayer('Topographic').addTo(map);




  document.getElementById("deactivateMe").addEventListener("click",function(data){
    if(layer1 !== undefined && layer2 !==undefined){
      console.log("iam here");
      map.removeLayer(layer1);
      map.removeLayer(layer2);
    }
  })

  let class_radio = Array.from(document.getElementsByClassName("radio"));
  class_radio.forEach(function(radio){
    let input = Array.from(radio.getElementsByTagName("input"))[0];
    input.addEventListener("click", function(){

      if(layer1 !== undefined && layer2 !==undefined){
        console.log("iam here");
        map.removeLayer(layer1);
        map.removeLayer(layer2);
      }

      if(this.checked){
        if(this.nextSibling.data ==="Bolivia"){
          layer1= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
            layers: 'gadm36_BOL_1', //Title name
            format: 'image/png', //depends on what you want to load in
            transparent: true,

            }).addTo(map);
            console.log(layer1);
          layer2= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
            layers: 'points', //Title name
            format: 'image/png', //depends on what you want to load in
            transparent: true,
            }).addTo(map);
            map.setView(new L.LatLng(  -16.290154 	, -63.588653), 6);

        }
        if(this.nextSibling.data ==="Argentina"){
          layer1= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
            layers: 'gadm36_ARG_1', //Title name
            format: 'image/png', //depends on what you want to load in
            transparent: true,

            }).addTo(map);
          layer2= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
            layers: 'points1', //Title name
            format: 'image/png', //depends on what you want to load in
            transparent: true,
            }).addTo(map);
            map.setView(new L.LatLng(  -38.416097 ,	-63.6166723), 4);

        }
        if(this.nextSibling.data ==="Chile"){
           layer1= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
            layers: 'gadm36_CHL_1', //Title name
            format: 'image/png', //depends on what you want to load in
            transparent: true,

            }).addTo(map);
          layer2= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
            layers: 'points2', //Title name
            format: 'image/png', //depends on what you want to load in
            transparent: true,
            }).addTo(map);
            map.setView(new L.LatLng(  	-35.675147 ,	-71.542969), 4);

        }
        if(this.nextSibling.data ==="Peru"){
          layer1= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
            layers: 'gadm36_PER_1', //Title name
            format: 'image/png', //depends on what you want to load in
            transparent: true,

            }).addTo(map);
            layer2= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
              layers: 'peru', //Title name
              format: 'image/png', //depends on what you want to load in
              transparent: true,
              }).addTo(map);
              map.setView(new L.LatLng(   	-9.189967 ,	-75.015152), 5);

        }
        if(this.nextSibling.data ==="Paraguay"){
          layer1= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
            layers: 'gadm36_PRY_1', //Title name
            format: 'image/png', //depends on what you want to load in
            transparent: true,

            }).addTo(map);
          layer2= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
            layers: 'hotosm_pry_points_of_interest_points', //Title name
            format: 'image/png', //depends on what you want to load in
            transparent: true,

            }).addTo(map);
            map.setView(new L.LatLng(  -23.442503 ,	-58.443832), 6);

        }
        if(this.nextSibling.data ==="Cuba"){
           layer1 = L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
            layers: 'gadm36_CUB_1', //Title name
            format: 'image/png', //depends on what you want to load in
            transparent: true,

            }).addTo(map);
            layer2= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
              layers: 'cuba', //Title name
              format: 'image/png', //depends on what you want to load in
              transparent: true,
              }).addTo(map);
              map.setView(new L.LatLng(  	21.521757 ,	-77.781167), 6);

        }
        if(this.nextSibling.data ==="Laos"){
          layer1= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
            layers: 'gadm36_LAO_1', //Title name
            format: 'image/png', //depends on what you want to load in
            transparent: true,

            }).addTo(map);
            layer2= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
              layers: 'laos_poi', //Title name
              format: 'image/png', //depends on what you want to load in
              transparent: true,
              }).addTo(map);
              map.setView(new L.LatLng(   	19.85627 	,102.495496), 6);

        }
        if(this.nextSibling.data ==="Thailand"){
           layer1= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
            layers: 'gadm36_THA_1', //Title name
            format: 'image/png', //depends on what you want to load in
            transparent: true,

            }).addTo(map);
            layer2= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
              layers: 'tai', //Title name
              format: 'image/png', //depends on what you want to load in
              transparent: true,
              }).addTo(map);
              map.setView(new L.LatLng(  	15.870032 ,	100.992541), 6);

        }

      }
    })
  })


  // let bolivia_layer= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
  //   layers: 'gadm36_BOL_1', //Title name
  //   format: 'image/png', //depends on what you want to load in
  //   transparent: true,
  //
  //   }).addTo(map);
  // let chile_layer= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
  //   layers: 'gadm36_CHL_1', //Title name
  //   format: 'image/png', //depends on what you want to load in
  //   transparent: true,
  //
  //   }).addTo(map);
  //
  // let cuba_layer= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
  //   layers: 'gadm36_CUB_1', //Title name
  //   format: 'image/png', //depends on what you want to load in
  //   transparent: true,
  //
  //   }).addTo(map);
  //
  // let peru_layer= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
  //   layers: 'gadm36_PER_1', //Title name
  //   format: 'image/png', //depends on what you want to load in
  //   transparent: true,
  //
  //   }).addTo(map);
  // let laos_layer= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
  //   layers: 'gadm36_LAO_1', //Title name
  //   format: 'image/png', //depends on what you want to load in
  //   transparent: true,
  //
  //   }).addTo(map);
  // let paraguay_layer= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
  //   layers: 'gadm36_PRY_1', //Title name
  //   format: 'image/png', //depends on what you want to load in
  //   transparent: true,
  //
  //   }).addTo(map);
  // let thailand_layer= L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-433439e99bb44e0ca1e59d4a74ca3bd2/wms', {
  //   layers: 'gadm36_THA_1', //Title name
  //   format: 'image/png', //depends on what you want to load in
  //   transparent: true,
  //
  //   }).addTo(map);

}


initMap();
