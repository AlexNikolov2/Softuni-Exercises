function solve(x1, y1, x2, y2){
    x1 = Number(x1)
    y1 = Number(y1)
    x2 = Number(x2)
    y2 = Number(y2)

    let length = Math.abs(x1-x2)
    let width = Math.abs(y1-y2)

    let area = length * width
    let perimeter = (2 * length) + (2 * width)

    console.log(area.toFixed(2))
    console.log(perimeter.toFixed(2))

}

solve(20, 10, 30, 20)
