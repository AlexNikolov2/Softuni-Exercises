function change(arg1, arg2, arg3){
    let bitcoin = Number(arg1)
    let yuan = Number(arg2)
    let commission = Number(arg3)

    let leva = bitcoin * 1168
    let usd = yuan * 0.15
    let bgnUsd = usd * 1.76

    let eur = (leva + bgnUsd) / 1.95

    let result = eur - (eur * (commission / 100))

    console.log(result.toFixed(2))


}

change(1,
    5,
    5)