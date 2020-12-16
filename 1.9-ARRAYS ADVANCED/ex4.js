function kor(arr){
    let k = arr.shift();

    let K = arr.slice(0,k)

    console.log(K.join(''))

    let finalK = arr.slice(arr.length - k)

    console.log(finalK.join(' '))
}
kor([2,7,8,9])