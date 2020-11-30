function functional(arg1, arg2, arg3){
    let product = arg1
    let town = arg2
    let quantity = Number(arg3)
    let totalMoney = 0 ;

    if(town === "Sofia"){
        switch(product){
            case "coffee" : totalMoney = quantity * 0.50 
            break
            case "water" : totalMoney = quantity * 0.80
            break
            case "beer" : totalMoney = quantity * 1.20
            break
            case "sweets" : totalMoney = quantity * 1.45
            break
            case "peanuts" : totalMoney = quantity * 1.60


        }

    }
    else if(town === "Plovdiv"){
        switch(product){
            case "coffee" : totalMoney = quantity * 0.40 
            break
            case "water" : totalMoney = quantity * 0.70
            break
            case "beer" : totalMoney = quantity * 1.15
            break
            case "sweets" : totalMoney = quantity * 1.30
            break
            case "peanuts" : totalMoney = quantity * 1.50
        }
    }
    else if(town === "Varna"){
        switch(product){
            case "coffee" : totalMoney = quantity * 0.45
            break
            case "water" : totalMoney = quantity * 0.70
            break
            case "beer" : totalMoney = quantity * 1.10
            break
            case "sweets" : totalMoney = quantity * 1.35
            break
            case "peanuts" : totalMoney = quantity * 1.55
        }
    }
    console.log(totalMoney)
}
