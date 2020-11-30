function solve ([kilometers, periodOfTravel]) {
    kilometers = Number(kilometers)

    let price = 0
    let taxiRate = 0

    if (periodOfTravel === "day"){
        taxiRate = 0.79
    }
    else {
        taxiRate = 0.90
    }

    if(kilometers < 20){
         price = 0.70 + kilometers * taxiRate
    }
    else if(kilometers < 100){
         price = kilometers * 0.09
    }
    else {
        price = kilometers * 0.09
    }
    console.log(price)
}
solve (7, "night")