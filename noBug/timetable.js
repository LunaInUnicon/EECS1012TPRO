
var TableX=15;
var TableY=7;

window.onload = function(){
    dogCode=localStorage.getItem("dogCode");
    day1=dogCode[2];
    day2=dogCode[3];
    startat=dogCode[4];
    hours=dogCode[5];
    lacotion="";

    makeTable();
    lacotion=locate(dogCode[4],dogCode[2]);
    //lacotion1=locate(dogCode[4],dogCode[3]);
    
    switch(dogCode[4]){//y line
        case "0":
            lacotion=lacotion+"1";
            break;
        case "1":
            lacotion=lacotion+"2";
            break;
        case "2":
            lacotion=lacotion+"3";
            break;
        case "3":
            lacotion=lacotion+"4";
            break;
            case "4":
            lacotion=lacotion+"5";
            break;
            case "5":
            lacotion=lacotion+"6";
            break;
            case "6":
            lacotion=lacotion+"7";
            break;
            case "7":
            lacotion=lacotion+"8";
            break;
            case "8":
            lacotion=lacotion+"9";
            break;
            case "9":
            lacotion=lacotion+"10";
            break;
    }lacotion=lacotion+"_";
    switch(dogCode[2]){//xline
        case "0":
            break;
        case "1":
            lacotion=lacotion+"1";//Sunday
            break;
        case "2":
            lacotion=lacotion+"2";//Monday
            break;
        case "3":
            lacotion=lacotion+"3";//Tues
            break;
        case "4":
            lacotion=lacotion+"4";//Wed
            break;
        case "5":
            lacotion=lacotion+"5";//Fri
            break;
        case "6":
            lacotion=lacotion+"6";//Thru
            break;
        case "7":
            lacotion=lacotion+"7";//Sat
            break;
    }
    console.log("for locate" +lacotion);
    $("#"+lacotion).attr("class", "thisOne");
    reTurn();
    


    coloring(dogCode[4],dogCode[5]);
    function coloring(inp,int){
    for(i=Number(inp);i<Number(int)+Number(inp);i++){
        b=i+1;
        if (dogCode[2]!=0){
        a="w"+b+"_"+dogCode[2];
        console.log("for color"+a);
        document.getElementById(a).style.backgroundColor="gray";
        document.getElementById(a).style.border="gray";}
        if (dogCode[3]!=0){
        a1="w"+b+"_"+dogCode[3];
        document.getElementById(a1).style.backgroundColor="gray";
        document.getElementById(a1).style.border="gray";}
    }
    
}
    
}

function makeTable(){
    for (var i = 1; i <= TableX; i++){
        var newTr = document.createElement("tr");
        for(var j=0;j<=TableY;j++){
        var newTd = document.createElement("Td"); 
        $(newTd).attr("id", "w"+i+"_"+j);
        $(newTr).append(newTd);
        }
        $("#timeTable").append(newTr);
        m=i+5;
        document.getElementById("w"+i+"_0").innerHTML=m+":00";
    }
}
function locate(y,x){
    lacotion="w";
    switch(y){//y line
        case "0":
            lacotion=lacotion+"1";
            break;
        case "1":
            lacotion=lacotion+"2";
            break;
        case "2":
            lacotion=lacotion+"3";
            break;
        case "3":
            lacotion=lacotion+"4";
            break;
            case "4":
            lacotion=lacotion+"5";
            break;
            case "5":
            lacotion=lacotion+"6";
            break;
            case "6":
            lacotion=lacotion+"7";
            break;
            case "7":
            lacotion=lacotion+"8";
            break;
            case "8":
            lacotion=lacotion+"9";
            break;
            case "9":
            lacotion=lacotion+"10";
            break;
    }lacotion=lacotion+"_";
    switch(x){//xline
        case "0":
            break;
        case "1":
            lacotion=lacotion+"1";//Sunday
            break;
        case "2":
            lacotion=lacotion+"2";//Monday
            break;
        case "3":
            lacotion=lacotion+"3";//Tues
            break;
        case "4":
            lacotion=lacotion+"4";//Wed
            break;
        case "5":
            lacotion=lacotion+"5";//Fri
            break;
        case "6":
            lacotion=lacotion+"6";//Thru
            break;
        case "7":
            lacotion=lacotion+"7";//Sat
            break;
    }
    return lacotion;
}