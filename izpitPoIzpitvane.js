function functional(arg1, arg2, arg3, arg4){
    let examHours = Number(arg1)
    let examMinutes = Number(arg2)
    let arrivalHours = Number(arg3)
    let arrivalMinutes = Number(arg4)

    let late = "Late"
    let onTime = "On time"
    let early = "Early"

    let examTime = (examHours * 60) + examMinutes
    let arrivalTime = (arrivalHours * 60) + arrivalMinutes

    let totalMinutesDifference = arrivalTime - examTime

    let studentArrival = late
    if(totalMinutesDifference < -30){
        studentArrival = early
    }
    else if(totalMinutesDifference <= 0){
        studentArrival = onTime
    }
    

}
functional(9,00,10,30)