//@ts-ignore
function solution(matrix:[][]):number {
    let suma=0, arreglo=[0,0,0,0,0];
    for(let i=0; i<matrix.length;i++){
        for(let j=0; j<matrix[i].length;j++){
            if(matrix[i][j]==0){
                arreglo[j]=1;
            }else if(arreglo[j]==0 && matrix[i][j]!=0){
                suma+=matrix[i][j];
            }
        }
        }
    return suma;
}
