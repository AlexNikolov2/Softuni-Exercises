function invertory(arr){
    let object = [];
    for (const line of arr) {
        let data = line.split(' / ');
        let name = data[0]
        let level = data[1]
        let invertory = data[2]

        const hero = {
            name : name,
            level : Number(level),
            invertory : invertory
        }
        object.push(hero)
    }

    let entries = Object.entries(object)
    let sorted = entries.sort((a,b) => a.level - b.level && a[2].localeCompare - b[2])

    sorted.forEach(x => {
        console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`);
    });

    

    
}
invertory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )