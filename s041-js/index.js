function square(n) {
    return n * n;
}

//Arrow Notation
//nueva forma de funcion cuando hay mas de una linea
const cube = x => {
    console.log("En funcion cube...");
    return x * x * x;
}

const sum = (a, b) => a + b;

//en una linea return eso
const cube2 = x => x * x * x;

function greet() {
    return "Hola mundo";
}

/*
  
*/

const tipoTriangulo = (a,b,c) => {
    if(a==b || a==c || b==c){
        return "isosceles";
    }else if(a==b && b==c){
        return "equilatero";
    }else{
        return "escaleno";
    }
}

const sumaEnteros = n => {
    let sum=0;
    for(let i=1;i<=n;i++){
        console.log(i);
        sum+=i;
    }
    return sum;
}

const test1 = _ =>{
  let values=[2,3,4];
  console.log(values);
  values.push(20);
  console.log(values);
  return values;
}

const arrSum = n => {
    let sum=0;
    let values=[];
    for(let i=1;i<=n;i++){
        values.push(i);
        sum+=i;
    }
    console.log("la suma es:",sum);
    return sum;
}
const find = (arr,x) => {
    for(let i=0;i< arr.length;i++){
        if(arr[i]==x){
            return true;
        }
    }
    return false;
}

const find2 = (arr,x) => {
    for(let element of arr){
        if(element==x){
            return true;
        }
    }
    return false;
}

const showMatrix = _ =>{
    const matrix=[[1,2,3],[4,5,6]];
    for(let i=0;i<matrix.length;i++){
      for(let j=0;j<matrix.length;j++){
          console.log(matrix[i][j]);
      }
    }
}

const getFullName = student => student.firstName + " " + student.lastName;
//Retorne verdadero si el estudiante es mayor de edad o falso en caso contrario
const legalAge = student => student.age >= 18;
//Modifique el ejercicio anterior para considerar un texto de respuesta
const legalAgel = studet => student.age >=18 ? "Mayor de edad" : "Menor de edad";

function showResult(result) {
    //Obtenemos una referencia al elemento HTML con ese ID
    //Podemos modificar sus atributos
    document.getElementById("txtResult").value = result;
}