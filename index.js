var intro  = "You are cordially invited to attend the wedding of" ;
// var fnB;

document.addEventListener("DOMContentLoaded", function(event) {
let greeting = document.getElementById('greetingA');
greeting.value = intro;


let var1 =  document.querySelectorAll("#firstnameA")[0];
let var2 =  document.querySelectorAll("#lastnameA")[0];

let var3 =  document.querySelectorAll("#firstnameB")[0];
let var4 =  document.querySelectorAll("#lastnameB")[0];

let var5 =  document.querySelectorAll("#iDate")[0];
let var6 =  document.querySelectorAll("#iTime")[0];

let var7 =  document.querySelectorAll("#iPlace")[0];
let var8 =  document.querySelectorAll("#iAddress")[0];
let var9 =  document.querySelectorAll("#iRSVP")[0];


document.addEventListener("keyup" , function() {
   document.getElementById("fnA").innerHTML = var1.value+ "  "  + var2.value  ;
   document.getElementById("fnB").innerHTML = var3.value+ "  "  + var4.value  ;
   
   document.getElementById("idate").innerHTML = var5.value ;
   document.getElementById("itime").innerHTML = var6.value ;
   console.log(var6.value);
    document.getElementById("place").innerHTML = var7.value ;
   document.getElementById("address").innerHTML = var8.value ;
    document.getElementById("rsvp").innerHTML = var9.value ;
  document.getElementById("monogram").innerHTML = var1.value.charAt(0)  + "&" + var3.value.charAt(0);
});
});