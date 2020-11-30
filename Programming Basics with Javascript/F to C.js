function convertor(celsius){
    celsius = Number(celsius)

    let fahrenheit = celsius * 1.8 + 32;
   
    console.log(fahrenheit.toFixed(2))
}

convertor(25)