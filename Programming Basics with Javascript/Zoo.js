function solve(arg1,arg2){
    arg1 = Number(arg1)
    arg2 = Number(arg2)

    let dogsProducts = Number(arg1) * 2.5
    let otherAnimals = Number(arg2) * 4
    let totalPrice = dogsProducts + otherAnimals
    
    console.log(`The final price is ${totalPrice} lv. `)   
}

solve(5, 4)