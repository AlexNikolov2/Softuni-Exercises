function solve(input){
    let destinations = {};
    for (const destination of input) {
        let [country, town, cost] = destination.split(' > ');
        cost = Number(cost);
        if(!destinations.hasOwnProperty(country)){
            destinations[country] = [];
        }
        if(!destinations[country].hasOwnProperty(town)){
            destinations[country][town] = cost;
        }
        let prevPrice = destinations[country][town];
        if(prevPrice > cost){
            destinations[country][town] = cost;
        }
    }
    const sorted = Object.entries(destinations).sort((a,b) => a[0].localeCompare(b[0])
    || a[1].town - b[1].town);
    let result = '';

    sorted.forEach((destination) => {
        result += `${destination[0]} -> `
        let offers = Array.from(Object.entries(destination[1]));
        offers.forEach((townOffer) => {
            result += `${townOffer[0]} -> ${townOffer[1]} `;
        });
        result += '\n';
    });
    console.log(result);

}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )