function solve(arr){
    let catalog = {}

    for(let line of arr){
        let [name,address] = line.split(':')
        catalog[name] = address
    }
    let sorted = Object.entries(catalog)

    sorted.sort((a,b) => {
        let nameA = a[0]
        let nameB = b[0]
        return nameA.localeCompare(nameB)
    })
    for([name,address] of sorted){
        console.log(`${name} -> ${address}`)
    }
}
solve(['Tim:Doe Crossing', 

'Bill:Nelson Place', 

'Peter:Carlyle Ave', 

'Bill:Ornery Rd'] )