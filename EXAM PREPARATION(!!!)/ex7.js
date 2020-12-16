function solve(arr){
    let message = arr.shift();
    
    for (const line of arr) {
        let commandSet = line.split('|');
        let command = commandSet[0];
        if(command == 'ChangeAll'){
            let substring = commandSet[1];
            let replacement = commandSet[2];
            let index = message.indexOf(substring);
            while(index > -1){
                message = message.replace(substring,replacement);
                index = message.indexOf(substring, index + 1);
            }
        }
        else if(command == 'Insert'){
            let index = commandSet[1];
            let replacement = commandSet[2] 
            let firstPart = message.slice(0, index)
            let secondPart =  message.slice(index)
            message = firstPart + replacement + secondPart      
        }
        else if(command == 'Move'){
            let howMany = commandSet[1]
            message = message.substring(howMany) + message.substring(0, howMany)
        }
        else if(command == 'Decode'){
            console.log(`The decrypted message is: ${message}`);
        }
    }

    
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]
  )