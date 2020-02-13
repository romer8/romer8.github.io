//-16.493164, -68.135101
//-16.517176, -68.127178
//-16.496250, -68.137223
var arrayMarkers=[];
var datalayer;
arrayMarkers=[
  {
    position:[-16.493164,-68.135101],
    name:" My House",
    info:'<div id="content1">'+
      '<div id="siteNotice1">'+
      '</div>'+
      '<h1>High School</h1>'+
      '<div id="bodyContent1">'+
      '<img src="img/llama.jpg">'+
      '<p><b>San Calixto</b>, also referred to as <b>Mi Colegio San Calixto</b>, ' +
    'De acuerdo a los datos históricos los Jesuitas fueron llamados por Monseñor Calixto Clavijo para que realicen una obra educativa, para ello adquirió la residencia del Mariscal Andrés de Santa Cruz, (actualmente Monumento Nacional) la misma que donó a la Compañía de Jesús para que ahí funcionase el nuevo colegio. En el mes de "Julio de 1882" se fundó el Colegio dándole el nombre de San Calixto (Obispo Mártir) como una forma de reconocimiento a Mons. Calixto Clavijo. El 1ro. de Agosto de 1882 empezó a funcionar el colegio con algo mas de 40 alumnos. Alrededor del Colegio, con el transcurrir de los años, se crearon cuatro grandes obras, </p>'+
      '</div>'+
      '</div>'
  },
  {
    position:[-16.517176, -68.127178],
    name:" La Paz",
    info:'<div id="content2">'+
      '<div id="siteNotice2">'+
      '</div>'+
      '<h1>La Paz-Bolivia</h1>'+
      '<div id="bodyContent2">'+
      '<img src="img/home.jpg">'+
      '<p><b>La Paz-Bolivia</b>, also referred to as <b>The wonder city</b>, is the main ' +
      'La Paz, which lies between 10,650 and 13,250 feet (3,250 and 4,100 metres) above sea level, is the world’s highest national capital. Visitors, upon arrival, often find exertion difficult because of the rarefied atmosphere at those elevations. The centre of the city lies in a deep, broad canyon formed by the La Paz, or Choqueyapu, River. The city’s location, about 1,400 feet (430 metres) below the surface of the Altiplano, the high intermontane plateau, affords some protection from the cold winds of the highlands. Population growth since the latter part of the 20th century has expanded the city up the canyon walls to the edge of the Altiplano. La Paz was Bolivia’s most populous city until the turn of the 21st century, when it was overtaken by Santa Cruz.  </p>'+
      '</div>'+
      '</div>'
  },
  {
    position:[-16.496250,-68.137223],
    name:" My Church",
    info:'<div id="content3">'+
      '<div id="siteNotice3">'+
      '</div>'+
      '<h1>San Francisco</h1>'+
      '<div id="bodyContent3">'+
      '<img src="img/market.jpg">'+
      '<p><b>San Francisco</b>, is a catholic chruch built <b> in the colonia</b>,' +
       'La Basílica de San Francisco de la ciudad de La Paz, Bolivia, es un templo católico bajo la advocación de San Francisco de Asís. Está situado en el centro de la ciudad. Forma parte del conjunto conventual que da el nombre a la plaza adyacente Plaza Mayor de San Francisco</p>'+
      '<p>Attribution: Uluru, <a href="https://es.wikipedia.org/wiki/Bas%C3%ADlica_de_San_Francisco_(La_Paz)">'+
      '</div>'+
      '</div>'
  }

]

var map;
function initMap() {
  var map = L.map('map').setView([-16.516877, -68.127461], 14);

  L.esri.basemapLayer('Topographic').addTo(map);
  var circle = L.circle([-16.516877, -68.127461], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 2000
    }).addTo(map);
  //
  arrayMarkers.forEach(function(markerPosition){
    console.log(markerPosition.position);
    var marker = L.marker(markerPosition.position).addTo(map);
    marker.bindPopup(markerPosition.info);
  });
    // load GeoJSON from an external file

  // $.getJSON("cines.json",function(data){
  //   // add GeoJSON layer to the map once the file is loaded
  //   L.geoJson(data).addTo(map);
  // });
  document.getElementById("activateMe").addEventListener("click",function(data){
    $.getJSON("verdes.json",function(data){
      // add GeoJSON layer to the map once the file is loaded
      datalayer=L.geoJson(data);
      datalayer.addTo(map);
    });
  })
  document.getElementById("deactivateMe").addEventListener("click",function(data){
      map.removeLayer(datalayer);
  })
}

initMap();
