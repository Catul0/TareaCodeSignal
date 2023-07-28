//@ts-ignore
function solution(a: string[]): string[] {
    let solucion: string[] = [];
    let aux = "";
  
    for (let j = 0; j < a[0].length + 2; j++) {
      aux += "*";
    }
  
    for (let i = 0; i < a.length; i++) {
      a[i] = "*" + a[i];
      a[i] = a[i] + "*";
    }
  
    let iterador = 0;
  
    for (let i = 0; i < a.length + 2; i++) {
      if (i === 0 || i === a.length + 1) {
        solucion.push(aux);
      } else {
        solucion.push(a[iterador]);
        iterador++;
      }
    }
  
    return solucion;
  }