function solution(longtitude, width, height, percent){
    longtitude = Number(longtitude)
    width = Number(width)
    height = Number(height)
    percent = Number(percent)

    let vAquarium = longtitude * width * height
    let litresTotal = vAquarium * 0.001
    let percentTotal= percent * 0.01
    let litresNeeded = litresTotal * (1 - percentTotal)

    console.log(`The liters we need: ${litresNeeded} litres.`)
}

solution(105, 77, 89, 18.5)
