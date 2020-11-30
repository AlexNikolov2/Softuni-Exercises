function leapYear(arg1, arg2){
    let year1 = arg1
    let year2 = arg2

    for(let year = year1; year <= year2; year++){
        if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
           console.log(year) 
        }
    }
}
leapYear(2000, 2011)