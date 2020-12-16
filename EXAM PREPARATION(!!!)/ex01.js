function size(arr){

 let energy = arr.shift()
 let counter = 0

for (let i = 0; i < arr.length; i++) {
    
    let command = Number(arr[i])

    energy -= command
    counter++
       
        if(counter % 3 == 0){
            energy += 3
        }
        if(energy <= 0){
            console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`)
            break;
        }
        else if(energy >= 100 && command == "End of battle"){
            console.log(`Won battles: ${counter}. Energy left: ${energy}`)
            break
        }
    }
 
}
size([
    `200`,
`54`,
`14`,
`28`,
`13`,
`End of battle`
  ])
