function solve(arr){
    let regex = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.?[\d]+)?)!(?<quantity>[\d]+)/
    let result = "Bought furniture:\n"
    let total = 0
    for (const line of arr) {
        let match = regex.exec(line)
        if(match){
        result += match.groups.name + '\n'
        total += Number(match.groups.price) * Number(match.groups.quantity)
        }
    }
    result += `Total money spend: ${total.toFixed(2)}`
    console.log(result)
}
solve([">>Sofa<<312.23!3",

    ">>TV<<300!5",
    
    ">Invalid<<!5" ,
    
    "Purchase"])