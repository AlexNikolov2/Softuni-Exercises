function doktora(arg1, arg2, arg3){
    let typeOfFlowers = arg1
    let flowers = Number(arg2)
    let budget = Number(arg3)

    let flowerPrice = 0
    let cost = 0

    switch(typeOfFlowers){
        case "Roses" : cost = flowers * 5
            if(flowers > 80){
                cost = cost * 0.90
            }
        
        break
    case  "Dahlias"  : cost = flowers * 3.80
    if(flowers > 90){
        cost = cost * 0.85
    } 
    break
    case  "Tulips" : cost = flowers * 2.80
    if(flowers > 80){
        cost = cost * 0.85
    }
    break
    case "Narcissus" : cost = flowers * 3
    if(flowers < 120){
        cost = cost * 1.15
    }
    break 
    case "Gladiolus" : cost = flowers * 2.50
    if(flowers < 80){
        cost = cost * 1.20
    }
    break
}

if( budget >= cost){
    console.log(`Hey, you have a great garden with ${flowers} ${typeOfFlowers} and ${(budget - cost).toFixed(2)} leva left.`)
}
else{
    console.log(`Not enough money, you need ${(cost - budget).toFixed(2)} leva more.`)
}
}
doktora("Tulips",
"88",
"260")
