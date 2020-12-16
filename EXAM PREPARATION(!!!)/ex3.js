function nums(input){
    let numbers = input.split(' ').map(Number)

    let sum = 0
    for(let number of numbers){
        sum += number;
    }
    let average = sum / numbers.length

    let arr = numbers.filter(x => x > average);
    arr.sort((a,b) => b - a)

    if(arr.length == 0){
        console.log('No')
    }
    else{
    console.log(arr.slice(0, 5).join(' '))
    }

}
nums('10 20 30 40 50')