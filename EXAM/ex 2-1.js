function crafting(arr){
    let word = arr.shift().split('|')
    let line = arr.shift().split(' ')
    
    while(line[0] !== "Done"){
        
        if(line[0] === "Move"){
            let index = Number(line[2])
            if(line[1] === "Left"){
                if(index + 1 > 0 && index + 1 < word.length){
                    word.splice(0,0)
                }
            }
        
            else if(line[1] === "Right"){
                if(index + 1 > 0 && index + 1 < word.length){
                    word.splice(word.length-1,0)
                }
            }
        }
        else if(line[0] === "Check"){
            let index = Number(line[2])
            if(line[1] === "Even"){
                
                if(index % 2 == 0){
                    word.splice(2,0)

            }
        }
            else if(line[1] === "Odd"){
                
                if(index % 2 !== 0){
                    word.splice(1,0)
                }
            }
        
    }
    line = arr.shift().split(' ')
    if(line[0] === "Done"){
        let weaponName = arr.join("")
        console.log(`You crafted ${weaponName}!`)
        break
    }
}
}