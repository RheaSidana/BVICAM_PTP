
window.onload=function(){
    document.getElementById("0").onclick=function(){
       var val=document.getElementById("0").value;
        addString(val);
    };
    document.getElementById("1").onclick=function(){
       var val=document.getElementById("1").value;
        addString(val);
    };
    document.getElementById("2").onclick=function(){
       var val=document.getElementById("2").value;
        addString(val);
    };
    document.getElementById("3").onclick=function(){
       var val=document.getElementById("3").value;
        addString(val);
    };
    document.getElementById("4").onclick=function(){
       var val=document.getElementById("4").value;
        addString(val);
    };
    document.getElementById("5").onclick=function(){
       var val=document.getElementById("5").value;
        addString(val);
    };
    document.getElementById("6").onclick=function(){
       var val=document.getElementById("6").value;
        addString(val);
    };
   document.getElementById("7").onclick=function(){
       var val=document.getElementById("7").value;
        addString(val);
    };
   document.getElementById("8").onclick=function(){
       var val=document.getElementById("8").value;
        addString(val);
    };
    document.getElementById("9").onclick=function(){
       var val=document.getElementById("9").value;
        addString(val);
    };
    document.getElementById("+").onclick=function(){
       var val=document.getElementById("+").value;
        addString(val);
    };
    document.getElementById("-").onclick=function(){
       var val=document.getElementById("-").value;
        addString(val);
    };
    document.getElementById("*").onclick=function(){
       var val=document.getElementById("*").value;
        addString(val);
    };
    document.getElementById("/").onclick=function(){
       var val=document.getElementById("/").value;
        addString(val);
    };
    document.getElementById("clearButton").onclick=function(){
        clearDisp();
    };
    document.getElementById("equalButton").onclick=function(){
        equality();
    };
};

function addString(val){
    document.getElementById("display").value+=val;
}

function equality(){
    var a= document.getElementById("display").value;
    document.getElementById("display").value=eval(a);
}

function clearDisp(){
    document.getElementById("display").value="";
}


