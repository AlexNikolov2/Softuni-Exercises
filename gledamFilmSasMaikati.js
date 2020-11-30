function kurvite(arg1, arg2, arg3){
    let type = arg1 
    let rows = Number(arg2)
    let columns = Number(arg3)

    let ticket = 0

    switch(type){
        case "Normal" : ticket = ticket + 7.5
        break
        case "Premiere" : ticket = ticket + 12
        break
        case "Discount" : ticket = ticket + 5
        break
    }
    let totalSeats = rows * columns
    let revenue = totalSeats * ticket
    
    console.log(`${revenue.toFixed(2)} lv.`)
} 
kurvite("Normal", 21, 13)