
//@ts-ignore
function solution(inputArray: string[]): string[] {
    let arreglo:string[]=[];
    let contador=0;
    for(let i=0; i < inputArray.length; i++){
       if(inputArray[i].length>contador){
           contador=inputArray[i].length;
       }
    }
    for(let j=0; j< inputArray.length; j++){
       if(inputArray[j].length==contador){
           arreglo.push(inputArray[j]);
       }
    }
    return arreglo;
}