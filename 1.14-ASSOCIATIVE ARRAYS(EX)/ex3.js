function solve(data){

    let parking = {}

    for (const line of data) {
        let[direction, carNum] = line.split(', ')

        if(direction === "IN"){
            parking[carNum] = 1
        }
        else{
            delete parking[carNum]
        }
    }
    return Object.keys(parking)
    .sort((a,b) => a.localeCompare(b))
    .join('\n')
}