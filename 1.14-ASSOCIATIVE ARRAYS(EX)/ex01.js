function solve(arr){
    let garages = new Map

    for (let line of arr) {
        
        let [garageNum, carKeys] = line.split(' - ')
        if(!garages.has(garageNum)){
            garages.set(garageNum, [carKeys])
        }
        else{        
                let availableCars = garages.get(garageNum);
                availableCars.push(carKeys);
                garages.set(garageNum, availableCars);
        }
    }
    let garaji = '';
    for (let [currentGarage, currentCarKeys] of [...garages.entries()]) {
        garaji += `Garage № ${currentGarage}\n`
        for (let currentCarProps of currentCarKeys) {
            currentCarProps = currentCarProps.replace(/: /g, ' - ');
            garaji += `--- ${currentCarProps}\n`;
        }
    }
    console.log(garaji);
} 

    /*"Garage № {number}: 
--- {carOneKeyOne} - {carOneValueOne}, {carOneKeyTwo} - {carOneValueTwo}… 
--- {the same for the next car} 
Garage № {number}: …"
    */
solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'] )