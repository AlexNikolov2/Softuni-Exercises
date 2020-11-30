function zadachaEdno(input){
    let favBook = input[0]
    let book = input[1]
    let checkedBooks = 0


    while(book !== "No More Books"){
        
        if(book == favBook){
            break
        }
        checkedBooks++
        book = input[checkedBooks + 1]
    }

    if(book == favBook){
        console.log(`You checked ${checkedBooks} books and found it.`)
    }
    else{
        console.log(`The book you search is not here!`)
        console.log(`You checked ${checkedBooks} books.`)
    }
    

}
zadachaEdno(["The Spot",
"Stronger",
"Life Style",
"No More books"])
