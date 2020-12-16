function angryPet (priceItems, entryPoint, typeItems, typePrice) {
    priceItems = priceItems.map(Number);
    let leftBreaking = priceItems.slice(0,entryPoint);
    let breakingRight = priceItems.slice(entryPoint+1,priceItems.length);
    let entryPointValue = priceItems[entryPoint];
 
    if (typeItems == 'cheap') {
        leftBreaking = leftBreaking.filter(el=> el < entryPointValue);
        breakingRight = breakingRight.filter(el => el < entryPointValue);
    } else if (typeItems == 'expensive') {
        leftBreaking = leftBreaking.filter(el=> el >= entryPointValue);
        breakingRight = breakingRight.filter(el => el >= entryPointValue);
    }
 
    if (typePrice == 'positive') {
        leftBreaking = leftBreaking.filter(el => el>0);
        breakingRight = breakingRight.filter(el => el>0);
    } else if (typePrice == 'negative') {
        leftBreaking = leftBreaking.filter(el => el<0);
        breakingRight = breakingRight.filter(el => el<0);
    } else if (typeItems == 'all') {
        leftBreaking = leftBreaking.slice();
        breakingRight = breakingRight.slice();
    }
 
    let sumRight = 0;
    let sumLeft = 0;
    if (breakingRight.length > 0) {
        sumRight = breakingRight.reduce((a,b) => a+b);
    }
    if (leftBreaking.length > 0) {
        sumLeft = leftBreaking.reduce((a,b) => a+b);
    }
 
    if (sumLeft >= sumRight) {
        console.log(`Left - ${sumLeft}`);
    } else {
        console.log(`Right - ${sumRight}`);
    }
}


