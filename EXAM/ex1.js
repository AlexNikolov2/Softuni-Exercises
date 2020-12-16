function bakery(arg0, arg1, arg2){
    let  biscuitsPerDayPerWorker = arg0
    let workers = arg1
    let rivalFactoryPer30Days = arg2

    let sum = 0
    for(let day = 1; day <= 30; day++){
        let biscuitsPerDay = biscuitsPerDayPerWorker * workers

        
        if(day % 3 === 0){

            biscuitsPerDay *= 0.75
        }

        sum += Math.floor(biscuitsPerDay)
    }

    console.log(`You have produced ${sum} biscuits for the past month.`)
    if(sum < rivalFactoryPer30Days){
        let diff = rivalFactoryPer30Days - sum  
        let percentage = (diff / rivalFactoryPer30Days) * 100

        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`)
    }
    else{
        let diff = sum - rivalFactoryPer30Days
        let percentage = (diff / rivalFactoryPer30Days) * 100

        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`)
    }
    
}
bakery(78, 8, 16000)