function solve(str){
    let arr = str.split(' ')

    let occurences = new Map()

    for (let word of arr) {
        word = word.toLowerCase()
        if( !occurences.has(word)){
            occurences.set(word,0)
        }
        let newVal = occurences.get(word) + 1
        occurences.set(word, newVal)
    }
    let keys = Array.from(occurences.keys())
    .filter( x => occurences.get(x) % 2 !== 0)
    console.log(keys.join(' '))
}