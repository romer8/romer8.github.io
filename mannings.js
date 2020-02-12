//CONSTANTS//
const K_SI = 1.0;
const K_ENGLISH =1.49;

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
  let ele = document.getElementsByName('units');
  let unidades;
  let velocity;
  let discharge;
  let area=Number(document.getElementById("Area").value);
  let perimeter=Number(document.getElementById("wperimeter").value);
  // let slope=Number(document.getElementById("Channel-Slope").value);
  let slope =Number(document.getElementById("ch_s").value);
  let n=Number(document.getElementById("manning_n").value);

   for(let i = 0; i < ele.length; i++) {
       if(ele[i].checked){
         unidades=ele[i].value;
       }
   }
   console.log(unidades);
   if(unidades == "English Units"){
     velocity= velocity_mannings_equation(area,perimeter,slope,n,K_ENGLISH);
     discharge = discharge_mannings_equation(area, velocity);
     document.getElementById("velocity-output").innerHTML=velocity;
     document.getElementById("discharge-output").innerHTML=discharge;
   }
   if(unidades== "SI Units"){
     velocity= velocity_mannings_equation(area,perimeter,slope,n,K_SI);
     discharge = discharge_mannings_equation(area, velocity);
     document.getElementById("velocity-output").innerHTML=velocity;
     document.getElementById("discharge-output").innerHTML=discharge;
   }



});
