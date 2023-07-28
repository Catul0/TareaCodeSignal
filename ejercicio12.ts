//@ts-ignore
function solution(x:number[]):number[]{
    let auxArray:number[]=[];
    let j=0;
    for(let i=0; i<x.length;i++){
        if(x[i]!=-1){
            auxArray.push(x[i]);
        }
    }
    auxArray.sort(function(a,b){return a - b;});
    for(let i=0; i<x.length;i++){
        
        if(x[i]!=-1){
            x[i]=auxArray[j];
            j++;
        }
    }
   return x;
}