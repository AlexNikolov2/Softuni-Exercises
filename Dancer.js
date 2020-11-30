function count(length, width, sideA){
    length = Number(length)
    width = Number(width)
    sideA = Number(sideA)

    let hallSize = width * length
    let wardrobeSize = sideA * sideA
    let benchSize = hallSize / 10
    let freeSpace = hallSize - (wardrobeSize + benchSize)
    let dancers = freeSpace / (40 * 0.0001 + 7000 * 0.0001)
    let CountDancer = Math.floor(freeSpace / hallSize)

    console.log(`${CountDancer}`)
}

count(50, 25, 2)