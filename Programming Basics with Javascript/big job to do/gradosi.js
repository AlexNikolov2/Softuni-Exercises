function functional(arg1, arg2){
    let degrees = Number(arg1)
    let typeOfTheDay = arg2 

    let outfit = ""
    let shoes = ""

    if(typeOfTheDay === `Morning`){
        if (degrees >= 10 && degrees <= 18){
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        }
        else if(degrees >= 18 && degrees <= 24){
            outfit = "Shirt"
            shoes = "Moccasins"
        }
        else if(degrees >= 25){
            outfit = "T-Shirt"
            shoes = "Sandals"
        }
    }
    else if(typeOfTheDay === `Afternoon`){
        if (degrees >= 10 && degrees <= 18){
            outfit = "Shirt"
            shoes = "Moccasins"
        }
        else if(degrees >= 18 && degrees <= 24){
            outfit = "T-Shirt"
            shoes = "Sandals"
        }
        else if(degrees >= 25){
            outfit = "Swim Suit"
            shoes = "Barefoot"
        }

    }
    else if(typeOfTheDay === `Evening`){
        if (degrees >= 10 && degrees <= 18){
            outfit = "Shirt"
            shoes = "Moccasins"
        }
        else if(degrees >= 18 && degrees <= 24){
            outfit = "Shirt"
            shoes = "Moccasins"
        }
        else if(degrees >= 25){
            outfit = "Shirt"
            shoes = "Moccasins"
        }

    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
functional(16, "Morning")