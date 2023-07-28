//para este ejercicio tengo que admitir que estuve varias horas y no em salio, llegue a la solucion que esta abajo pero falla en 1 test, 
//en su momento le pedi ayuda al chat gpt por que queria avanzar, pero me queda pendiente terminar de resolverlo por mi cuenta
//@ts-ignore
function solution(arreglo: string): string {
    let x: number[] = [];
    let y: number[] = [];
    let newString: string[] = [];
    let respuesta: string = "";
    let aux: string = "";
  
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === "(") {
        x.push(i + 1);
      } else if (arreglo[i] === ")") {
        y.push(i);
      }
    }
  
    for (let i = 0; i < x.length; i++) {
      aux += arreglo.substring(x[i], y[i]).split("").reverse().join("");
      newString.push(aux);
      aux = "";
    }
  
    let iterador = 0;
    for (let j = 0; j < arreglo.length; j++) {
      if (arreglo[j - 1] !== "(") {
        respuesta += arreglo[j];
      } else {
        for (let z = 0; z < y[iterador] - x[iterador]; z++) {
          respuesta += newString[iterador][z];
        }
        j += y[iterador] - x[iterador];
        iterador++;
      }
    }
  
    for (let i = 0; i < x.length; i++) {
      respuesta = respuesta.replace('(', '');
    }
  
    return respuesta;
  }
