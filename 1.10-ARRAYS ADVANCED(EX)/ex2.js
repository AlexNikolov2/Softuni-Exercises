function arr(arr){
    
    for(let i = 0; i < arr.length; i++){
        let ind = arr.indexOf(arr[i], i + 1)

        while(ind !== - 1){
            arr.splice(ind,1);
            ind = arr.indexOf(arr[i], i + 1)
        }
    }

    console.log(arr.join(' '))
    
}
arr([1, 2, 3, 4,1])