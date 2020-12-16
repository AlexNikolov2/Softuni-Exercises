function solvi(input){
    let numberArray = input.shift().split(' ').map(Number);

    let command = input.shift();
    while(command != 'end'){
        let tokens = command.split(' ');

        switch(tokens[0]){
            case 'swap' : {
                let index1 = Number(tokens[1])
                let index2 = Number(tokens[2])
                let temp = numberArray[index1]
                numberArray[index1] = numberArray[index2]
                numberArray[index2] = temp
                break;
            }
            case 'multiply' : {
                let index1 = Number(tokens[1])
                let index2 = Number(tokens[2])
                numberArray[index1] *= numberArray[index2]
                break
            }
            case 'decrease' :{
                numberArray = numberArray.map(x => x - 1)
            }
        }
        command = input.shift();

    }
    console.log(numberArray.join(', '))
}

solvi([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  )