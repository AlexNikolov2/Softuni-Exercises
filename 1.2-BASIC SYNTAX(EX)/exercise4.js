function solve(group, type, day){
    group = Number(group);

    let price = 0;
    let totalPrice = group * price;
    
        if(type === 'Students'){
                if (day === 'Friday') {
                    price = 8.45;
                    if(group >= 30){
                        totalPrice * 0.85;    
                    }
                } 
                else if(day === 'Saturday'){
                    price = 9.80;
                    if(group >= 30){
                        totalPrice * 0.85;
                    }
                }
                else if(day === 'Sunday'){
                    price = 10.46;
                    if(group >= 30){
                        totalPrice * 0.85;
                    }
                }
            }
            
            if(type === 'Business'){
                if (day === 'Friday') {
                    price = 10.90;
                    if(group >= 100){
                        totalPrice = (group - 10) * price;
                    }
                } 
                else if(day === 'Saturday'){
                    price = 15.60;
                    if(group >= 100){
                        totalPrice = (group - 10) * price;
                    }
                }
                else if(day === 'Sunday'){
                    price = 16;
                    if(group >= 100){
                        totalPrice = (group - 10) * price;
                    }
                }
            }
           
            if(type === 'Regular'){
                if (day === 'Friday') {
                    price = 15;
                    if(group >= 10 && group <= 20){
                        totalPrice * 0.90;
                    }
                } 
                else if(day === 'Saturday'){
                    price = 20;
                    if(group >= 10 && group <= 20){
                        totalPrice * 0.90;
                    }
                }
                else if(day === 'Sunday'){
                    price = 22.50;
                    if(group >= 10 && group <= 20){
                        totalPrice * 0.90;
                    }
                }
            }
   console.log(`Total price: ${totalPrice}`);
}
solve(30,
    "Students",
    "Sunday"
    )