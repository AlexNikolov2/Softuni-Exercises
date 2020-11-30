function srbeNaVrbe(arg1, arg2){
    let month = arg1
    let stays = Number(arg2)

    let studio = 0
    let apartment = 0
    let discountStudio = 0
    let discountApartment = 0
    let priceActual = studio * stays * discountStudio
    let actualPrice = apartment * stays * discountApartment
    let totalPrice = studio * stays 
    let priceTotal = apartment * stays

    if(month === "May" || month === "October"){
         studio = 50
         apartment = 65
        if(stays > 7 && stays <= 14){
            discountStudio = 0.95
            discountApartment = 0.90
            priceActual = studio * stays * discountStudio
            actualPrice = apartment * stays * discountApartment
            console.log(`Apartment : ${actualPrice.toFixed(2)} lv.`)
            console.log(`Studio: ${priceActual.toFixed(2)} lv.`) 
        }
        if(stays > 14){
            discountStudio = 0.70
            discountApartment = 0.90
            priceActual = studio * stays * discountStudio
            actualPrice = apartment * stays * discountApartment
            console.log(`Apartment: ${actualPrice.toFixed(2)} lv.`)
            console.log(`Studio: ${priceActual.toFixed(2)} lv.`) 
        }
    }
    else if(month === "June" || month === "September"){
        studio = 75.20
        apartment = 68.70
        if(stays > 7 && stays <= 14){
            totalPrice = studio * stays
            priceTotal = apartment * stays
            console.log(`Apartment: ${priceTotal.toFixed(2)} lv.`)
            console.log(`Studio: ${totalPrice.toFixed(2)} lv.`) 
        }
        if(stays > 14){
            discountStudio = 0.70
            discountApartment = 0.90
            priceActual = studio * stays * discountStudio
            actualPrice = apartment * stays * discountApartment
            console.log(`Apartment: ${actualTotal.toFixed(2)} lv.`)
            console.log(`Studio: ${priceActual.toFixed(2)} lv.`) 
}
}
    else if(month === "July" || month === "August"){
        studio = 76
        apartment = 77
        if(stays > 7 && stays <= 14){
            totalPrice = studio * stays
            priceTotal = apartment * stays
            console.log(`Apartment: ${priceTotal.toFixed(2)} lv.`)
            console.log(`Studio: ${totalPrice.toFixed(2)} lv.`) 
        }
        if(stays > 14){
            totalPrice = studio * stays
            discountApartment = 0.90
            actualPrice = apartment * stays * discountApartment
            console.log(`Apartment: ${actualPrice.toFixed(2)} lv.`)
            console.log(`Studio: ${totalPrice.toFixed(2)} lv.`)
        }
    }
}
srbeNaVrbe("August",
    20)
