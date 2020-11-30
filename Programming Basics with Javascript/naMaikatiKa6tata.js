function house(x, y, h){
    x = Number(x)
    y = Number(y)
    h = Number(h)

    let sideWall = x * y
    let window = 1.5 * 1.5
    let sideWallsByTwo = sideWall * 2 - window * 2
    let backWall = x * x
    let door = 1.2 * 2
    let smallerWalls = backWall * 2 - door
    let wallsSquare = sideWallsByTwo + smallerWalls
    let greenPaint = wallsSquare / 3.4
    let pokrivRectangles = 2 * (x * y)
    let pokrivTriangles = 2 * (x * h / 2)
    let pokrivSquare = pokrivRectangles  + pokrivTriangles
    let redPaint = pokrivSquare / 4.3
    
    console.log(greenPaint.toFixed(2))
    console.log(redPaint.toFixed(2))
}

house(6, 10, 5.2)