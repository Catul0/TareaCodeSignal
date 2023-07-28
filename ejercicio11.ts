//en este lo que hice fue pushear el numero a un arreglo, para que quedem separados con distintos indices, 
//despues es facil, sumas la primera mitad en uno, la segunda mitad en otro y listo

//@ts-ignore
function solution(x:number):boolean{
    let a=0, b=0;
    let aux:number[]=[];
    while(x>=10){
        aux.push(Math.floor(x%10));
        x/=10;
    }
    aux.push(Math.floor(x))
    for(let i = 0; i<aux.length/2; i++){
        a+=aux[i];
    }
    for(let i = aux.length/2; i<aux.length; i++){
        b+=aux[i];
    }
    return (a==b);
}