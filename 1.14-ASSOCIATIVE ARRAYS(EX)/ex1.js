function solve(arr){
    let words = arr.shift().split(' ')

    let obj = {}

    for (const word of words) {
        obj[word] = 0
    }

    for (const word of arr) {
        if(obj.hasOwnProperty(word)){
            obj[word]++
        }
    }

    Object.keys(obj).sort((a,b) => obj[b] - obj[a])
    .forEach(el =>{
        console.log(`${el} - ${obj[el]}`)
    })
    
    
}