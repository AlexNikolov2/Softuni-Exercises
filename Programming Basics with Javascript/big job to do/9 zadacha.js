function hahaa(arg1){
    let salary = Number(arg1[1])

    for(let i =2 ; i < arg1.length; i++){
        let tabs = arg1[i]
    

    switch(tabs){
        case "Facebook" : salary -= 150
        break
        case "Instagram" : salary -= 100
        break
        case "Reddit" : salary -= 50
        break
        default : salary -= 0

    }
    if(salary <= 0){
        break
    }
}   
    if(salary <= 0 ){
        console.log("You have lost your salary.")
    }
    else{
        console.log(salary)
    }
}
hahaa(["10",
"850",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])

