//@ts-ignore
function solution(inputString: string): boolean {
    let reverso="";
    for(let i = inputString.length-1; i>=0; i--){
        reverso+=inputString[i];
    }
    return reverso==inputString;
}
