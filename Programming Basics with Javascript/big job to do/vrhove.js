function vrh(input){
    let groups = Number(input[0])

    let group1 = 0
    let group2 = 0
    let group3 = 0
    let group4 = 0
    let group5 = 0

    for(let i = 1; i <= groups; i++){
        let groupSize = Number(input[i])

        if(groupSize <= 5){
            group1++
        }
        else if(groupSize >= 6 && groupSize <= 12){
            group2++
        }
        else if(groupSize >= 13 && groupSize <= 25){
            group3++
        }
        else if(groupSize >= 26 && groupSize <= 40){
            group4++
        }
        else{
            group5++
        }
    }

    let peopleTotal = group1 + group2 + group3 + group4 + group5
    let group1Num = (group1 / peopleTotal) * 100
    let group2Num = (group2 / peopleTotal) * 100
    let group3Num = (group3 / peopleTotal) * 100
    let group4Num = (group4 / peopleTotal) * 100
    let group5Num = (group5 / peopleTotal) * 100

    console.log(`${group1Num}%`)
    console.log(`${group2Num}%`)
    console.log(`${group3Num}%`)
    console.log(`${group4Num}%`)
    console.log(`${group5Num}%`)


}
vrh(10,
    10,
    5,
    1,
    100,
    12,
    26,
    17,
    37,
    40,
    78)