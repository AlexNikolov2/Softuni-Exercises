function vlako(arr){
    let vagons = arr.shift().split(' ').map(Number);

    let capacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let isAdd = arr[i].split(' ').includes('Add')

        if(isAdd){
            let newVagon = arr[i].split(' ')[1]
            vagons.push(Number(newVagon))
        }
        else{
            let n = Number(arr[i])
            for(let j = 0; j < vagons.length; j++){
                if(vagons[j] + n <= capacity){
                    vagons[j] += n
                    break
                }
            }
        }

        
        
    }
    return vagons.join(' ')

}
console.log(
vlako(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)
)