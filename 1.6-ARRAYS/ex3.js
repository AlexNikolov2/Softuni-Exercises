function solve(n, arr){
    let partialArr = [];
    for(let i = 0; i < n; i++){
        partialArr.push(arr[i])
    }

    let result = '';
   for(let i = partialArr.length - 1; i >= 0; i--){
       result += partialArr[i];
       result += ' ';
   }
    console.log(result)
}
solve()