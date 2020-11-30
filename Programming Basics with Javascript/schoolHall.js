function Hall(w, h ){
    w = Number(w)
    h = Number(h)

    let column = Math.floor((h - 1) / 0.7)
    let row = Math.floor(w / 1.2)
    let benchTotal = (column * row) - 3
    let columnHalf = Math.floor(h / 2 - 0.5)
    
    console.log(benchTotal)
    console.log((2*columnHalf)*row - 3)
}
Hall(15, 8.9)