function killer(text){
    let spaces = 0

    for(let index = 0; index < text.length ; index++){
        let symbol = text[index]

        if(symbol === " "){
            spaces += 1
        }
    }
    let words = spaces += 1
if(words > 10){
    console.log(`The message is too long to be send! Has ${words} words.`)
}
else{
    console.log(`The message was send successfully!`)
}
    
}
killer("This message has exactly eleven words. One more as it's allowed!")