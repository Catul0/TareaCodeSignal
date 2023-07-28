//@ts-ignore
function solution(inputArray:[]):number {
    let aux =Number.NEGATIVE_INFINITY;
    for(let i=0; i<inputArray.length-1; i++){
        if(inputArray[i]*inputArray[i+1]>aux){
            aux=inputArray[i]*inputArray[i+1];
        }
    }
    return aux;
}
