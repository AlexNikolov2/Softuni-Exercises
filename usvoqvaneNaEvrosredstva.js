function praneNaPari(arg1, arg2, arg3){
    let income = Number(arg1)
    let success = Number(arg2)
    let minimalSalary = Number(arg3)

    let socialScholarship = minimalSalary * 0.35
    let excellentScholarship = success * 25

    if(socialScholarship > excellentScholarship){
        if(income < minimalSalary){
        console.log(`You get a Social scholarship ${socialScholarship} BGN`)
        }
    }
        else if(excellentScholarship > socialScholarship){
        if(success >= 5.5){
            console.log(`You get a scholarship for excellent resuults ${excellentScholarship} BGN.`)
        }
        else {
            console.log(`You cannot get a scholarship!`)
        }
    }
}

praneNaPari(234, 6.00, 235)