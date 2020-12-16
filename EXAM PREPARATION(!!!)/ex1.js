function solve(input){
    
    let [eff1, eff2, eff3, students] = input.map(Number);

    let efficiency = eff1 + eff2 + eff3;

    let hourPassed = 0;
    while(students > 0){
        hourPassed++
        
        if(hourPassed % 4 != 0){
            students -= efficiency
        }

        
    }
    console.log(`Time needed: ${hourPassed}`)

}
solve(['5', '6', '4', '20'])