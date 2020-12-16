function myPush(arr, el){
    arr[arr.length] = el
}
function myPop(arr){
    let el = arr[arr.length-1]

    arr.length--

    return el
}

let myArr = []
console.log(myArr)

myPush(arr, '50')
console.log(myArr)

myPop(arr)

function myIndOf(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i
        }
    }
    return - 1
}

console.log(myIndOf(arr, 30))
