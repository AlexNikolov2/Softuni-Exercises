function solve(text, word){
    /*let word = sentence.split(' ')

    for (const word of sentence) {
        if(word.includes(censoredWord)){
            word.replace
        }
    } */

    let start = text.indexOf(word)
    
    while(start != -1){
        let first = text.substring(0, start)
        let second = text.substring(start + word.length)
        text = first + '*'.repeat(word.length) + second
        start = text.indexOf(word)
    }

    console.log(text)
}
solve('Heil Hitler Sieg Heil Hitler', 'Hitler')