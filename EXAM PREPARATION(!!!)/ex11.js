function solve(input){
    let pattern = /(=|\/)[A-Z][A-Za-z]{2,}\1/g
    let travelCount = 0
    let cities = []

    if(pattern.test(input)){
        const destination = input.match(pattern)

        destination.forEach(travelPoint => {
            travelCount += (travelPoint.length - 2)
            cities.push(travelPoint.slice(1, (travelPoint.length - 1)))
        });
    }

    console.log(`Destinations: ${cities.join(', ')}`);
    console.log(`Travel Points: ${travelCount}`);

}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')