window.onload =_=>{
    document.getElementById("btnMultiply").onclick =_=>{
       value1=parseInt(document.getElementById("txtValue1").value);
       value2=parseInt(document.getElementById("txtValue2").value);
       document.getElementById("txtResult").innerHTML=value1*value2;
    }
    document.getElementById("btnAdd").onclick =_=>{
        value1=parseInt(document.getElementById("txtValue1").value);
        value2=parseInt(document.getElementById("txtValue2").value);
        document.getElementById("txtResult").innerHTML=value1+value2;
    }
    document.getElementById("btnClean").onclick =_=>{
        document.getElementById("txtValue1").value="";
        document.getElementById("txtValue2").value="";
    }
}

