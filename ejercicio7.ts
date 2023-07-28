//@ts-ignore
function solution(sequence:[]):boolean {
    let aux=0
    let resultado=true;
    for(let i=1;i<sequence.length;i++){
        if(sequence[i]<=sequence[i-1]) {
            aux++
          if(aux>1){
            resultado = false;
          }
          if(sequence[i]<=sequence[i-2] && sequence[i+1]<=sequence[i-1]){
            resultado= false;
          } 
        }
    } 
    return resultado;
}