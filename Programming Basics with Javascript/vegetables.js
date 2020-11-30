function solve(vegetablesPerKilo, fruitsPerKilo, vegetablesKiloTotal, fruitsKiloTotal){
    vegetablesPerKilo = Number(vegetablesPerKilo)
    fruitsPerKilo = Number(fruitsPerKilo)
    vegetablesKiloTotal = Number(vegetablesKiloTotal)
    fruitsKiloTotal = Number(fruitsKiloTotal)

    let vegetablesPrice = vegetablesKiloTotal * vegetablesPerKilo
    let fruitsPrice = fruitsKiloTotal * fruitsPerKilo
    let totalPrice = vegetablesPrice + fruitsPrice
    let totalPRiceEuro = totalPrice / 1.94 

    console.log(totalPRiceEuro.toFixed(2))
}
solve(0.194, 19.4, 10, 10)