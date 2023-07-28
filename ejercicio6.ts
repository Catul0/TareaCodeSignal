//Este ejerrcicio era el que lo habia hecho con un auxiliar y un if y en clase lo dejamos asi, con 1 linea

//@ts-ignore
function solution(statues:[]):number {
    return (Math.max(...statues) - Math.min(...statues) + 1)-(statues.length );
}
