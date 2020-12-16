function compo(arr){
    let sum = 0

    let command = arr.pop()
    

    for (let i = 0; i < arr.length; i++){
        
        let price = Number(arr[i]) 
        if(i < 0){
            console.log("Invalid price!")
            continue
        }
          
        sum += price         
        
    }
    
        if( sum <= 0){
            console.log("Invalid order!")
            
        }

        else if( sum > 0 ){
    
    let taxes = sum * 0.2

    let totalSum = sum + taxes

    if(command = 'special'){
        totalSum = totalSum * 0.9
    }

    console.log("Congratulations you've just bought a new computer!")
console.log(`Price without taxes: ${sum.toFixed(2)}$`)
console.log(`Taxes: ${taxes.toFixed(2)}$`)
console.log('-----------')
console.log(`Total price: ${totalSum.toFixed(2)}$`)
        }
        
    }

compo([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ]    
    )