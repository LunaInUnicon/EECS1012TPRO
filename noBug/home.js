let c="";

function aselect(){
    if(c!=""){
        location=c;
    }
    else {
        p=document.getElementById("NA");
        p.innerHTML="Please select something";
        document.getElementById("NA").style.animation="shake 0.8s";
        setTimeout(
            function(){
                p.innerHTML="";
                document.getElementById("NA").style.animation="";
            },1600);
    }
}

function Scel(){
//p=document.getElementById("NA");
select=document.getElementById("AcaSes").value;
switch(select){
    case "Sum":
        c="courseSelect.html";
        break;
    case "fal":
        c="";
        break;
    case "win":
        c="notva.html";
        break;
    
}
//p.innerHTML=select+c;
}
