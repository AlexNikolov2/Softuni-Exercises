function solve(input){
    let actions = {
    Plunder(towns, townName, pop, gold){
        [pop,gold] = [Number(pop), Number(gold)]
        let town = towns[townName]
        town.pop -= pop
        town.gold -= gold

        if(town.pop == 0 || town.gold == 0){
            console.log(`${townName} has been wiped off the map`);
            delete town
        }
    },
    Prosper(towns, town, gold){
        town = towns[townName]
        town.gold += gold

        if(gold < 0){
            console.log();
        }
        console.log(`${gold} gold added to the city treasury. ${townName} now has ${town.gold}`);
    }
}
    let towns = {}

    let line;

    while ((line = input.shift())!= 'Sail' ) {
        let [townName, pop, gold] = line.split('||')
        if(towns.hasOwnProperty(townName) == false){
            towns[townName] = { pop: 0, gold: 0}
        }

        towns[townName].pop += Number(pop)
        towns[townName].gold += Number(gold)
    }

    while((line = input.shift) != 'End'){
        let tokens = line.split('=>')
        let actionName = tokens[0]
        let townName = tokens[1]

        let action = actions[actionName]
        action(towns, townName, tokens[2], tokens[3])
    }

    let sorted = Object.entries(towns).sort()

    function compareTowns(a,b){
        
    } 
}
solve()

