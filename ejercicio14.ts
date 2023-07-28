//@ts-ignore
function solution(a: number[]): number[] {
    let team1 = 0;
    let team2 = 0;
    let solution: number[] = [];
  
    for (let i = 0; i < a.length; i++) {
      if (i % 2 === 0) {
        team1 += a[i];
      } else {
        team2 += a[i];
      }
    }
  
    solution.push(team1);
    solution.push(team2);
    return solution;
  }