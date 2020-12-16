function sumOfK(n ,k){
    let values = [1];

    console.log(values.slice(-k))

    for(let i = 1; i < n; i++){

       let lastK = values.slice(-k)
       let sum = 0

       for(let num of lastK){
           sum+=num
       }

       values.push(sum)
    }

    console.log(values.join(' '))
}
sumOfK(10, 2)