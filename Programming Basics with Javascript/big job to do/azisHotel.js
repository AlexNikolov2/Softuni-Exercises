function azis(arg1, arg2, arg3){
    let day = Number(arg1)
    let typeOfHousing = arg2
    let grade = arg3
    let totalPrice = 0

    switch(typeOfHousing){
        case "room for one person":
            totalPrice = (day - 1) * 18.00
        break

    case "apartment" :
            totalPrice = (day - 1) * 25.00
            if(day < 10){
                totalPrice = totalPrice * 0.70
            }
            else if (day >=10 && day <= 15){
                totalPrice = totalPrice * 0.65
            }
            else {
                totalPrice = totalPrice * 0.50
            } 
    break

    case "president apartment":
        totalPrice = (day - 1) * 35.00
            if(day < 10){
                totalPrice = totalPrice * 0.90
            }
            else if (day >=10 && day <= 15){
                totalPrice = totalPrice * 0.85
            }
            else {
                totalPrice = totalPrice * 0.80
            } 

    break
}

if (grade === "positive"){
    totalPrice = totalPrice * 1.25
}
else {
    totalPrice = totalPrice * 0.90
}
console.log(totalPrice.toFixed(2))
}
azis(14, "apartment", "positive")