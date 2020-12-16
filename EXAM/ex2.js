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
crafting(["ha|Do|mm|om|er",
"Move Right 0",
"Move Left 3",
"Check Odd",
"Move Left 2",
"Move Left 10",
"Move Left 0",
"Done"])
    
/*
if(line[0] === 'Delete'){
            let index = Number(line[1]);
            if(index + 1 >= 0 && index + 1 < words.length){
                words.splice(index + 1, 1)
            }
        } else if(line[0] === 'Swap'){
            let firstIndex = words.indexOf(line[1]);
            let secondIndex = words.indexOf(line[2]);
            if(firstIndex !== -1 && secondIndex !== -1){
                let swapped = words[firstIndex];
                words[firstIndex] = words[secondIndex];
                words[secondIndex] = swapped;
            }
        } else if(line[0] === 'Put'){
            let index = Number(line[2]);
            if(index - 1 >= 0 && index - 1 < words.length){
                words.splice(index - 1, 0, line[1]);
                
            }if(index - 1 >= 0 && index - 1 === words.length){
                words.push(line[1]);
            }
        } else if(line[0] === 'Sort'){
            let sorted = words.sort((a,b) => b.localeCompare(a));
            words = sorted.slice();
        } else if(line[0] === 'Replace'){
            if(words.includes(line[2])){
                let index = words.indexOf(line[2]);
                words.splice(index, 1, line[1]);
            }
        }
 
        line = input.shift().split(' ');
    }
*/