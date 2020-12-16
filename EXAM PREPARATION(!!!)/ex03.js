function theFinalQuest(input){
    let words = input.shift().split(' ');
    let line = input.shift().split(' ');
   
    while(line[0] !== 'Stop'){
 
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
    
    console.log(words.join(' '));
 
}