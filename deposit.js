function solution(depositedAmount, months, yearInterest){
    
    depositedAmount = Number(depositedAmount)
    months =  Number(months)
    yearInterest = Number(yearInterest)

    let interest = depositedAmount * (yearInterest/100)
    let interestPerMonth = interest / 12
    let sum = depositedAmount + (months * interestPerMonth)

    console.log(interest)
    console.log(interestPerMonth. toFixed(2))
    console.log(sum)
}

solution(200, 3, 5.7)