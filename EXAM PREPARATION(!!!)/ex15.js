function solve(arr){
    let pass = arr.shift();
    let newPass = [];
    for (let line of arr) {
        let commandSet = line.split(' ');
        let command = commandSet[0]
        
        if(command === 'TakeOdd'){
            /* take all the odd indices
            potential function to use : actually, none
            other potential ideas - isOdd boolean with a for loop
            */
           for (let index = 0; index < pass.length; index++) {
               let letter = pass.charAt(index);
               if(index % 2 !== 0){
                    let nextLetter = ;
               }
        }
    }
        else if(command === 'Cut'){

            /*remove the first occurence 
                from the given index remove until the given length
                potential function to use : substring
             */
        }
        else if(command === ' Substitute'){
            /* replace the 
             */
        }
    }
}
solve(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
    ])