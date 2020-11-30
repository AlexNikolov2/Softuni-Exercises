function solution(groznaKurvaPerKilo, tsatsaPerKilo, palamudaKilo, safridKilo, midi4kiKilo){
    groznaKurvaPerKilo = Number(groznaKurvaPerKilo)
    tsatsaPerKilo = Number(tsatsaPerKilo)
    palamudaKilo = Number(palamudaKilo)
    safridKilo = Number(safridKilo)
    midi4kiKilo = Number(midi4kiKilo)

    let palamudaPrice = groznaKurvaPerKilo * 1.6
    let palamudaSum = palamudaKilo * palamudaPrice
    let safridPrice = tsatsaPerKilo * 1.8
    let safridSum = safridKilo * safridPrice
    let midi4kiSum = midi4kiKilo * 7.5
    let totalSum = palamudaSum + safridSum + midi4kiSum

    console.log(totalSum.toFixed(2))
}

solution(6.9, 4.2, 1.5, 2.5, 1)