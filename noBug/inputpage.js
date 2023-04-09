var dog;
var dogCode="";

let once = function(fn) {
    let caller = true;
    return function() {
        if(caller) {
            caller = false
            fn.apply(this, arguments)
        }
    }
}

function asa(){
    input=document.getElementById("dog").value;
    dog=input;

}
function sub(){
    
    switch (dog){
        case "101111":
            a101111();
            break;
        case "101112":
            a101112();
            break;
        case "103423":
            a103423();
            break;
        default:
        document.getElementById("test").innerHTML="Can't find any course";

    }
    localStorage.setItem("dogCode",dogCode);
    console.log(localStorage.getItem("dogCode"));
}
let a101112 = once(function() {
    dogCode=dogCode+dog;})
let a101111 = once(function() {
        dogCode=dogCode+dog;})
let a103423 = once(function() {
    dogCode=dogCode+dog;})