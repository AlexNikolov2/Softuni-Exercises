function solve(arr){
    let students = new Map()

    for (let line of arr){
        let tokens = line.split(' ')
        let name = tokens.shift()
        let grades = tokens.map(Number)

        if(students.has(name)){
            let existing = students.get(name)
            for(let grade of grades){
                existing.push(grade)
            }
        }
        else{
            students.set(name,grades)
        }
    }
    function compareAverage([nameA, gradesA], [nameB, gradeB]){
        let avgA = 0
        grades.forEach(x =>avgA += x )
        avgA /= gradesA.length

        let avgB = 0
        gradesB.forEach(x => avgB += x)
        avgB /= gradesB
           ;
    }
}
solve(['Lilly 4 6 6 5', 

'Tim 5 6', 

'Tammy 2 4 3', 

'Tim 6 6'] )