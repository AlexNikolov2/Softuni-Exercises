function solve(arr){
    let phonebook = {};
    for (let line of arr) {
      let tokens = line.split(' ')
      let key = tokens[0]
      let value = tokens[1]
      
      phonebook[key]  = value  
    }
    for (let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`)
            
        }
}
solve(['Tim 0834212554', 

'Peter 0877547887', 

'Bill 0896543112', 

'Tim 0876566344'] )