function solution(input){
    let rent = Number(input)

    let cake = rent * 0.2
    let drinks = cake * 0.55
    let circusman = rent / 3
    let total = rent + cake + drinks + circusman 

    console.log(total)
}

solution(2250)