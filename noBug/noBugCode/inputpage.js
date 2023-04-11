var dog;
var dogCode="";
var output="";

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
        case "112181":
            a112181();
            break;
        case "221292":
            a221292();
            break;
        case "334313":
            a334313();
            break;
        case "443424":
            a443424();
            break;
            case "151532":
            a151532();
            break;
            case "125291":
            a125291();break;
            case "233312":
            a233312();
            break;
            case "342423":
            a342423();
            break;
            case "451534":
            a451534();
            break;
            case "132311":
            a132311();
            break;
            case "243422":
            a243422();
            break;
            case "352533":
            a352533();
            break;
            case "461184":
            a461184();
            break;
            case "144421":
            a144421();
            break;
            case "253532":
            a253532();
            break;
            case "362183":
            a362183();
            break;
        default:
        document.getElementById("test").innerHTML="Can't find any course";

    }
    localStorage.setItem("dogCode",dogCode);
    document.getElementById("output").innerHTML=output;
    document.getElementById("dog").value="";
    console.log(localStorage.getItem("dogCode"));
}
let a112181 = once(function() {
    dogCode=dogCode+dog;
    output=output+"Math 		Tuesday 	1st period 8:00 AM 8:00AM - 9:00AM<br>";
})
let a221292 = once(function() {
        dogCode=dogCode+dog;
        output=output+"English 	Monday 		2nd period 9:00 AM 9:00AM - 10:00AM<br>";
    })
let a334313 = once(function() {
    dogCode=dogCode+dog;
    output=output+"Physics 	Thursday 	3rd period 10:00 AM 10:00AM - 1:00PM<br>";
})
    let a443424 = once(function() {
        dogCode=dogCode+dog;
        output=output+"Chemistry 	Wednesday 	4th period 11:00 AM 11:00AM - 15:00PM<br>";
    })
        let a151532 = once(function() {
            dogCode=dogCode+dog;
            output=output+"Biology 	Monday 		5th period 12:00 PM 12:00PM - 2:00PM<br>";})
            let a125291 = once(function() {
                dogCode=dogCode+dog;
                output=output+"Math 		Friday 		2nd period 9:00 AM 9:00AM - 10:00AM<br>";})
                let a233312 = once(function() {
                    dogCode=dogCode+dog;
                    output=output+"English 	Wednesday 	3rd period 10:00 AM 10:00AM - 12:00PM<br>";})
                    let a342423 = once(function() {
                        dogCode=dogCode+dog;
                        output=output+"Physics 	Tuesday 	4th period 11:00 AM 11:00AM - 2:00PM<br>";})
                        let a451534 = once(function() {
                            dogCode=dogCode+dog;
                            output=output+"Chemistry 	Monday 		5th period 12:00 PM 12:00PM - 4:00PM<br>";})
                            let a132311 = once(function() {
                                dogCode=dogCode+dog;
                                output=output+"Math 		Thursday 	3rd period 10:00 AM 10:00AM - 11:00AM<br>";})
                                let a243422 = once(function() {
                                    dogCode=dogCode+dog;
                                    output=output+"English 	Wednesday 	4th period 11:00 AM 11:00AM - 1:00PM<br>";})
                                    let a352533 = once(function() {
                                        dogCode=dogCode+dog;
                                        output=output+"Physics 	Tuesday 	5th period 12:00 PM 12:00PM - 15:00PM<br>";})
                                        let a461184 = once(function() {
                                            dogCode=dogCode+dog;
                                            output=output+"Chemistry 	Monday 		1st period 8:00 AM 8:00AM - 12:00PM<br>";})
                                            let a144421 = once(function() {
                                                dogCode=dogCode+dog;
                                                output=output+"Math 		Thursday 	4th period 11:00 AM 11:00AM - 12:00PM<br>";})
                                                let a253532 = once(function() {
                                                    dogCode=dogCode+dog;
                                                    output=output+"English 	Wednesday 	5th period 12:00 PM 12:00PM - 2:00PM<br>";})
                                                    let a362183 = once(function() {
                                                        dogCode=dogCode+dog;
                                                        output=output+"Physics 	Tuesday 	1st period 8:00 AM 8:00AM - 11:00AM<br>";})