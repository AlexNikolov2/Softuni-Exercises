function solution(arg1, arg2, arg3, arg4){
    let v = Number(arg1)
    let p1 = Number(arg2)
    let p2 = Number(arg3)
    let h = Number(arg4)
    
    let water = p1 * h + p2 * h

    if (water <= v){
        console.log(`The pool is ${Math.trunc(water / v * 100)} % full.
          Pipe 1 : ${Math.trunc(p1 * h/ water * 100)}%.
          Pipe 2 : ${Math.trunc(p2 * h/ water * 100)}%. `)
    }
    else {
        console.log(`For ${h} hours the pool overflows with ${water - v} liters.`)
    }
}
solution(1000, 100, 120, 3) 
