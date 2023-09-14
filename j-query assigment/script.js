// clicke event
function checkename(){
 let fn = document.getElementById("frist").value;
 let ln = document.getElementById("last").value;
 let em = document.getElementById("email").value;
 let mo = document.getElementById("Mobile").value;
 let dob = document.getElementById("date").value;
 let ad = document.getElementById("add").value;
 let ct = document.getElementById("city").value;
 let pi = document.getElementById("pin").value;
 let ps = document.getElementById("pass").value;
 let al = document.querySelectorAll("input").value;
 

 if ( fn == ""|| fn == null ){
     alert("frist name ")
     return false 
 }
 else if (ln == "" || ln == null ){
     document.getElementById("mgs2").innerText="Enetr a last Name "
     return false 
 } else if (em == "" || em == null ){
     document.getElementById("mgs3").innerText="Enetr a email "
     return false 
 }else if (mo == "" || mo == null ){
     document.getElementById("mgs4").innerText="Enetr a Mobile no "
     return false 
 }
 else if (dob == "" || dob == null ){
     document.getElementById("mgs6").innerText="Enetr a date of brith "
     return false 
 }
 else if (ad == "" || ad == null ){
     document.getElementById("mgs7").innerText="Enetr a address "
     return false 
 }
 else if (ct == "" || ct == null ){
     document.getElementById("mgs8").innerText="Enetr a city "
     return false }
  else if (pi == "" || pi == null ){
     document.getElementById("mgs9").innerText="Enetr a pin "
     return false }
     else if (ps == "" || ps == null ){
         document.getElementById("mgs12").innerText="Enetr a password "
         return false }
         else if(al == "" || al == null){
             alert.innerText=""
         }
}



// blure event


// keybord event

function nameValid(checkname, mgs) {
 let regEx = /^[a-zA-Z]*$/;
 if (!(regEx.test(checkname.value)) || checkname.value.length < 2 || checkname.value.length > 6) {
     document.getElementById(mgs).innerText = "Enter proper name"
     return false;
 } else {
     document.getElementById(mgs).innerText = ""
     return false;
 }
}

function checkNumValid(nocheck, mgs) {
 let regEx = /^[0-9]+$/;
 let start = /^[6-9]/
 if (!(regEx.test(nocheck.value)) || nocheck.value.length < 10 || !(start.test(nocheck.value))) {
     document.getElementById(mgs).innerText = "Enter Proper number"
     return false;
 } else {
     document.getElementById(mgs).innerText = ""
     return false;
 }
}
