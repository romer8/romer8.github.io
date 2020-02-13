//CONSTANTS//
const K_SI = 1.0;
const K_ENGLISH =1.49;



function change_Display(){
  document.getElementById("resultado_n").style.display="none";
  document.getElementById("resultado_slope").style.display="none";
  document.getElementById("resultado_width").style.display="none";
  document.getElementById("resultado_depth").style.display="none";
};


function checker (value,element,types){
  console.log(value);
  let problem;
  let bools=true;
  if(value==""){
    console.log("empty");
    problem=" this field cannot be empty";
    bools=false;
    element.innerHTML=problem;
    element.style.display="inline";
    element.style.background="red";
    return bools
  }
  if(isNaN(value)){
    console.log("string");
    problem=" the value is a string, please enter a valid number";
    bools=false;
    element.innerHTML=problem;
    element.style.display="inline";
    element.style.background="red";
    return bools
  }
  if(!isNaN(value)){
    console.log("negative");
    console.log(typeof(value));
    console.log(Number(value));
    if(Number(value) < 0){
      console.log("bigger than zero in");
      problem=" the value is negative, please enter a valid number";
      bools=false;
      element.innerHTML=problem;
      element.style.display="inline";
      element.style.background="red";

      return bools
    }
  }
  if(types=="n"){
    let n_value= Number(value);
    if(n_value >1 ){
      document.getElementById("resultado_n").innerHTML="the n is too high, are you sure?";
      document.getElementById("resultado_n").style.display="inline";
      document.getElementById("resultado_n").style.background="blue";

    }
  }
  if(types=="slope"){
    let s_value= Number(value);
    if(s_value >0.1 ){
      document.getElementById("resultado_slope").innerHTML="the slope is too high, are you sure?";
      document.getElementById("resultado_slope").style.display="inline";
      document.getElementById("resultado_slope").style.background="blue";


    }
  }
  if(types=="width"){
    let w_value= Number(value);
    if(w_value <1 ){
      document.getElementById("resultado_width").innerHTML="the width is to small, are you sure?";
      document.getElementById("resultado_width").style.display="inline";
      document.getElementById("resultado_width").style.background="blue";


    }
  }
  if(types=="depth"){
    let d_value= Number(value);
    if(d_value <1 ){
      document.getElementById("resultado_depth").innerHTML="the depth is to small, are you sure?";
      document.getElementById("resultado_depth").style.display="inline";
      document.getElementById("resultado_depth").style.background="blue";

    }
  }
  return bools;
}

function perimeter_wetted(width, depth){
  let p= width +2* depth;
  return p;
}
function area_cal(width,depth){
  let a =width * depth;
  return a;
}

// the results//
function velocity_mannings_equation(area,perimeter,slope,n,k){
  let first= k/n;
  console.log(first);
  let second = Math.pow(area/perimeter,2/3);
  console.log(second);
  let third =Math.pow (slope, 1/2);
  console.log(third);
  let result= first * second * third;
  console.log(result);
  return result;
};

function discharge_mannings_equation(area, velocity){
  return velocity * area;
}

document.getElementById("convertMe").addEventListener("click",function(){
  let mycheck=true;
  change_Display();
  let ele = document.getElementsByName('units');
  let unidades;
   for(let i = 0; i < ele.length; i++) {
       if(ele[i].checked){
         unidades=ele[i].value;
       }
   }
   if(unidades == undefined){
     document.getElementById("resultado_units").innerHTML="SELECT THE UNITS, PLEASE";
     document.getElementById("resultado_units").style.display="inline";
     document.getElementById("resultado_units").style.background="red";

   }


  let velocity;
  let discharge;
  // let area=Number(document.getElementById("Area").value);
  let width= document.getElementById("width").value;
  let result_w=document.getElementById("resultado_width");
  mycheck=checker(width,result_w,"width");
  width=Number(width);

  let depth= document.getElementById("depth").value;
  let result_d=document.getElementById("resultado_depth");
  mycheck=checker(depth,result_d,"depth");
  depth=Number(depth);

  let slope =document.getElementById("ch_s").value;
  let result_s=document.getElementById("resultado_slope");
  mycheck= checker(slope,result_s,"slope");
  slope=Number(slope);

  let n=document.getElementById("manning_n").value;
  let result_n=document.getElementById("resultado_n");
  mycheck=checker(n,result_n,"n");
  n=Number(n)
  console.log(mycheck);
  if(mycheck != false){
    console.log("inside my checj");
    let perimeter=perimeter_wetted(width, depth);
    let area = area_cal (width,depth);
     console.log(unidades);

     if(unidades == "English Units"){
       let perimeter=perimeter_wetted(width, depth);
       let area = area_cal (width,depth);
       velocity= velocity_mannings_equation(area,perimeter,slope,n,K_ENGLISH);
       discharge = discharge_mannings_equation(area, velocity);
       let vel=`${velocity} m/s`;
       let dis=`${discharge} cubic meters`;
       document.getElementById("velocity-output").innerHTML=vel;
       document.getElementById("discharge-output").innerHTML=dis;
     }
     if(unidades== "SI Units"){
       velocity= velocity_mannings_equation(area,perimeter,slope,n,K_SI);
       discharge = discharge_mannings_equation(area, velocity);
       let vel=`${velocity} f/s`;
       let dis=`${discharge} cubic feet`;
       document.getElementById("velocity-output").innerHTML=vel;
       document.getElementById("discharge-output").innerHTML=dis;
     }
  }


});
