
window.onload=function()
{
var first="";
var c=false;
count=0; document.getElementById("yes").onclick= function(){ displayChoice();};

 document.getElementById("no").onclick= function(){noChange();};
 
 document.getElementById("zero").onclick= function(){
     first="0";
     document.getElementById('Symbol'). style.display="none";
     displayPlayers("0");
     document.getElementById('players'). style.display="block";
 };

 document.getElementById("cross").onclick= function(){
     first="X";
     document.getElementById('Symbol'). style.display="none";
     displayPlayers("X");
    document.getElementById('players'). style.display="block";
  };

 document.getElementById("B11").onclick= function(){
 var buttonClick=assigned("B11");
 if(buttonClick==true &&c==false){
 giveVal("B11",first);
 count++;
 checkCount(count);
 first=nextVal(first);
 c=matrixCheck();
 }
};

document.getElementById("B12").onclick= function(){
 var buttonClick=assigned("B12");
 if(buttonClick==true && c==false){
 giveVal("B12",first);
 count++;
 checkCount(count);
 first=nextVal(first);
 c=matrixCheck();
 }
};

document.getElementById("B13").onclick= function(){
 var buttonClick=assigned("B13");
 if(buttonClick==true && c==false){
 giveVal("B13",first);
 count++;
 checkCount(count);
 first=nextVal(first);
 c=matrixCheck();
 }
};

document.getElementById("B21").onclick= function(){
 var buttonClick=assigned("B21");
 if(buttonClick==true && c==false){
 giveVal("B21",first);
 count++;
 checkCount(count);
 first=nextVal(first);
 c=matrixCheck();
 }
};

document.getElementById("B22").onclick= function(){
 var buttonClick=assigned("B22");
 if(buttonClick==true && c==false){
 giveVal("B22",first);
 count++;
 checkCount(count);
 first=nextVal(first);
 c=matrixCheck();
 }
};

document.getElementById("B23").onclick= function(){
 var buttonClick=assigned("B23");
 if(buttonClick==true && c==false){
 giveVal("B23",first);
 count++;
 checkCount(count);
 first=nextVal(first);
 c=matrixCheck();
 }
};

document.getElementById("B31").onclick= function(){
 var buttonClick=assigned("B31");
 if(buttonClick==true && c==false){
 giveVal("B31",first);
 count++;
 checkCount(count);
 first=nextVal(first);
 c=matrixCheck();
 }
};

document.getElementById("B32").onclick= function(){
 var buttonClick=assigned("B32");
 if(buttonClick==true && c==false){
 giveVal("B32",first);
 count++;
 checkCount(count);
 first=nextVal(first);
 c=matrixCheck();
 }
};

document.getElementById("B33").onclick= function(){
 var buttonClick=assigned("B33");
 if(buttonClick==true && c==false){
 giveVal("B33",first);
 count++;
 checkCount(count);
 first=nextVal(first);
 c=matrixCheck();
 }
};

 document.getElementById("NGame").
 onclick=function(){
     removeChange();
     c=false;
     first="";
     count=0;
 };
 
 
};



function checkCount(count){
    if(count==9){
        displayWinner("Draw");
    }
}


function displayPlayers(val){
    document.getElementById('player1').innerText="   Player 1:  "+val;
    if(val==="0"){
        val="X";
    }
    else
    if(val=="X"){
        val="0";
    }
     document.getElementById('player2').innerText="   Player 2:  "+val;
     document.getElementById('gameButton'). style.display="block";
}

function assigned(buttonValue){
    buttonValue=document.getElementById(buttonValue).value;
    if(buttonValue=="0" ||buttonValue=="X"){
        return false;
    }
    return true;
}


function matrixCheck(){
    var a,b,c;
    var done=assignTag(11,22,33);
    if(done==true){
        //console.log("diagonal");
        return done;
    }
    done=assignTag(13,22,31);
    if(done==true){
        //console.log("diagonal");
        return done;
    }
    var x=1,y=2,z=3;
    for(i=1;i<=3;i++){
        done=assignTag((i*10+x),(i*10+y),(i*10+z));
        if(done==true){
            //console.log("row");
            return done;
        }
        done=assignTag((x*10+i),(y*10+i),(z*10+i));
        if(done==true){
            //console.log("column");
            return done;
        }
    }
    //console.log("false");
    return false;
}


function assignTag(t1,t2,t3){
    t1="B"+t1.toString();
    t2="B"+t2.toString();
    t3="B"+t3.toString();
    var a,b,c;
    a=document.getElementById(t1);
    b=document.getElementById(t2);
    c=document.getElementById(t3);
    var x,y,z,done;
    x=a.value;
    y=b.value;
    z=c.value;
    if(!(x===" ")&&(!(y===" "))&&(!(z===" ")))
    done=complete(a,b,c);
    return done;
}


function complete(a,b,c){
    var x,y,z,done;
    x=a.value;
    y=b.value;
    z=c.value;
    //console.log(x," ",y," ",z);
    if(x===y && x===z){
        //console.log("true");
        displayWinner(x);
        clearAllButton();
        return true;
    }
    return false;
}

function giveVal(a,val){
    document.getElementById(a).value= val;
}


function nextVal(first){
    if(first===("0")){
        first="X";
    }
    else if(first==="X"){
        first="0";
    }
    else{
        first="";
    }
    return first;
}

function displayChoice(){
  document.getElementById('Symbol'). style.display="block";
  document.getElementById('players'). style.display="none";
}


function displayWinner(win){
document.getElementById('Winner').style.display="block";
    document.getElementById('won').innerText=win;
    document.getElementById("gameButton").style.display="none";
    document.getElementById('NGame'). style.display="block";
    document.getElementById('Starting'). style.display="none";
}


function noChange(){
    document.getElementById("gameButton").style.display="none";
    document.getElementById("Starting").style.display="none";
    document.getElementById('NGame'). style.display="block";
}


function removeChange(){
    document.getElementById('Symbol'). style.display="none";
    document.getElementById('Winner'). style.display="none";
    document.getElementById('gameButton'). style.display="block";
    document.getElementById('Starting'). style.display="block";
    document.getElementById('players'). style.display="none";
    document.getElementById('NGame'). style.display="none";
    document.getElementById("gameButton").style.display="none";
    clearAllButton();
}


function clearAllButton(){
    for(i=1;i<=3;i++){
        for(j=1;j<=3;j++){
            var val="B"+i.toString()+j.toString();
            clearButton(val);
        }
    }
}


function clearButton(val){
    document.getElementById(val).value=" ";
}






