function solve(arr){
    let string = arr.shift();
    let pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<bestBefore>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;
    const kcalPerDay = 2000;
    let match = pattern.exec(string);
    let result = [];
    let total = 0;
    while(match){
        const item = match.groups.item;
        const bestBefore = match.groups.bestBefore;
        const kcal = Number(match.groups.kcal);

        total += kcal;

        result.push(`Item: ${item}, Best before: ${bestBefore}, Nutrition: ${kcal}`);

        match = pattern.exec(string);
    }
    let days = Math.floor(total / kcalPerDay);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(result.join('\n'));
    
}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )