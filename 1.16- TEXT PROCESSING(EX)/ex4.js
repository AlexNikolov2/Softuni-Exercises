function solve(word, string){
    string = string.toLowerCase().split(' ')
    
    if(string.includes(word.toLowerCase())){
        console.log(word)
    }
    else{
        console.log(`${word} not found!`)
    }
}