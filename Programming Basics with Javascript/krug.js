function solve(r){
    r = Number(r)

    let area = r * r * Math.PI 
    let perimeter = r * Math.PI * 2

    console.log(area.toFixed(2))
    console.log(perimeter.toFixed(2))
}
solve(3)