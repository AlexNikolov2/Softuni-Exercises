function zadachaDve(input){
    let index = 1
    let badGrades = 0
    let solved = 0
    let lastProblem = ""
    let totalSum = 0
    let isTired = false

    let MinbadGrades = Number(input[0])

    let exam = input[index]

    while(exam !== "Enough"){

        let grade = Number(input[index + 1])

        if(grade <= 4){
            badGrades++
        }
        if(badGrades === MinbadGrades){
            isTired = true
            break
        }
        
        lastProblem = exam
        totalSum += grade
        solved++

        index += 2

        exam = input[index]
    }

        if(isTired === true){
            console.log(`You need a break, ${badGrades} poor grades.`)
        }
        else{
                let averageScore = totalSum / solved
                console.log(`Average score : ${averageScore.toFixed(2)}`)
                console.log(`Number of problems: ${solved}`)
                console.log(`Last problem: ${lastProblem}`)
            }
        
    }
zadachaDve(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
