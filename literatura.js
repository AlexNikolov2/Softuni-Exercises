function solution(totalPages, papersPerHour, days){

    totalPages = Number(totalPages);
    papersPerHour = Number(papersPerHour);
    days = Number(days);

    let totalHours = totalPages / papersPerHour;
    let neededHoursPerDay = totalHours / days;
    

    console.log(neededHoursPerDay)

}

solution(432, 15, 4)