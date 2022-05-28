const main =_=>{
    buttonPintar=document.getElementById("btnPint");

    buttonPintar.addEventListener("click",getResult);
}
window.addEventListener("load",main);
const getResult =_=>{
    let dimensiones=getDimeniones();
    let matriz=getMatriz(dimensiones);
    showResult(matriz);
}
const getDimeniones=_=>{
    let filas=document.getElementById("txtValue1").value;
    let columnas=document.getElementById("txtValue2").value;
    return [filas,columnas];
}
const getMatriz =(dimensiones)=>{
    let f=dimensiones[0];
    let c=dimensiones[1];
    let matriz="";
    let i=0;
    let j=0;
    let r=0;
    let valor=0;
    for(let i=0;i<f;i++){
       matriz=matriz+"<tr>";
       for(let j=0;j<c;j++){
           valor=(j+1)+r;
           matriz=matriz+"<td>"+valor+"</td>";
       }
       r=valor;
       matriz=matriz+"</tr>";
    }
    return matriz;
}
const showResult=(matriz)=>{
    document.getElementById("tbGrid").innerHTML=matriz;
}
