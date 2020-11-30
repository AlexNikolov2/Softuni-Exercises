function patuvamPriMaikati(arg1, arg2){
    let budget = Number(arg1)
    let season = arg2

    let destination = ""
    let location = ""
    let wastedMoney = 0
    
    if(budget <= 100){
        let destination = "Bulgaria"
        if(season === "summer"){
            let location = "Camp"
            let wastedMoney = budget * 0.30 
            console.log(`Somewhere in ${destination}`)
            console.log(`${location} - ${wastedMoney.toFixed(2)}`)
        }
        if(season === "winter"){
            let location = "Hotel"
            let wastedMoney = budget * 0.70
            console.log(`Somewhere in ${destination}`)
            console.log(`${location} - ${wastedMoney.toFixed(2)}`)
        }
    }
    if(budget > 100 && budget <= 1000){
        let destination = "Balkans"
        if(season === "summer"){
            let location = "Camp"
            let wastedMoney = budget * 0.40
            console.log(`Somewhere in ${destination}`)
            console.log(`${location} - ${wastedMoney.toFixed(2)}`)
        }
        if(season === "winter"){
            let location = "Hotel"
            let wastedMoney = budget * 0.80
            console.log(`Somewhere in ${destination}`)
            console.log(`${location} - ${wastedMoney.toFixed(2)}`)
        }
    }
    if(budget > 1000){
        let destination = "Europe"
        let location = "Hotel"
        let wastedMoney = budget * 0.90
        console.log(`Somewhere in ${destination}`)
        console.log(`${location} - ${wastedMoney.toFixed(2)}`)
    }
}
patuvamPriMaikati(10050, "summer")