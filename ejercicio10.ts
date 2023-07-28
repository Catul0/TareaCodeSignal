//En este ejercico lo que hace el validador es que controla que cunado se este comparando una letra con otra del otro arreglo, verifica que no sea la misma letra que ya se comparo
//por ejemplo si tenes "abc" "aab" eso deberia retornar 2 (a y b se repiten) pero sin ese validador la primera A sumaria con la 2 A del otro arreglo

//@ts-ignore
function solution(a:[],b:[]):number{
    let contador=0;
    let validador=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]==b[j] && validador[j]==0){
                contador++;
                validador[j]=1;
                j=b.length+1;
            }
        }
    }
    return contador;
}