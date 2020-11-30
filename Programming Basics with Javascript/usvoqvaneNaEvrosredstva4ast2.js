function praneNaPari(arg1, arg2, arg3){
    let income = Number(arg1)
    let success = Number(arg2)
    let minimalSalary = Number(arg3)
 
    let socialScholarship = Math.floor(minimalSalary * 0.35)
    let excellentScholarship = Math.floor(success * 25)
 
    if(income < minimalSalary){
        if(success >= 5.50){
            if(excellentScholarship > socialScholarship){
                console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`)
            }
            else {
                console.log(`You get a Social scholarship ${socialScholarship} BGN`)
            }
        }

            else if(success >= 4.50){
                console.log(`You get a Social scholarship ${socialScholarship} BGN`)
            }
            else {
                console.log(`You cannot get a scholarship!`)
            }
        }
            else if (success >= 5.50){
                console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`)
            } 
            else {
                console.log(`You cannot get a scholarship!`)
            }
}
