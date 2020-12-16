function solve(destination) {
    let pattern = /([=\/])([A-Z][a-z]+)\1/gi;
    let count = 0;
    let ourCity = [];
 
    if (pattern.test(destination)) {
        const ourDest = destination.match(pattern);
 
        ourDest.forEach(destinationn => {
            count += (destinationn.length - 2);
            ourCity.push(destinationn.slice(1, (destinationn.length - 1)));
 
        });
    }
    
        console.log(`Destinations: ${ourCity.join(", ")}`);
        console.log(`Travel Points: ${count}`);
    
}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')