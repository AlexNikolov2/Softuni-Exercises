function hehehe(input){
    let index = 0
    let name = input[index]
    index++
    let counter = 1
    let falisCounter = 0
    let avGrade = 0
    let isExcluded = false
    while(counter <= 12){
        grade = Number(input[index])
        index++
        if(grade < 4.00){
            falisCounter++
            if(falisCounter == 2){
                console.log(`${name} has been excluded at ${counter} grade.`)
                isExcluded = true
                break
            }
            continue
        }
        avGrade += grade
        counter++

    }
    if(!isExcluded){
    console.log(`${name} graduated. Average grade: ${(avGrade / 12).toFixed(2)} `)
    }
}
hehehe(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

