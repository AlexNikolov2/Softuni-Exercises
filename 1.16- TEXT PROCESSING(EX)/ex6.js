function solve(string){

    let result = []
    let cap = 0
    for (let i = 1; i < string.length; i++) {
        if(string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90){
            let word = string.substring(cap, i)
            result.push(word)
            cap = i
            
        }
        
        
    }
    result.push(string.substring(cap, string.length))
    console.log(result.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
