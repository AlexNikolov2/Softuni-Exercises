function solve(arr){
    class Cat{
        constructor(name, age){
            this.name = name
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for(let catAsString of arr){
        let [catName, catAge] = catAsString.split(' ')
        let cat = new Cat(catName, catAge)
        cat.meow();
    }
}
solve(['Mellow 2', 'Tom 5'])