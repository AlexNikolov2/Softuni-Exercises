function solve(input){
    let objext = {};
    for (const line of input) {
        let [company, id] = line.split(' -> ');
        if(!objext.hasOwnProperty(company)){
            objext[company] = []
        }
         objext[company].push(id);
        
    }
    let sorted = Object.entries(objext);
    sorted.sort((a,b) => a[0].localeCompare(b[0]));

    sorted.forEach(element => {
        console.log(element[0]);
        let set = new Set(element[1]);
        for (let num of set) {
            console.log(`-- ${num}`);
        }
    });
    

}
solve(['SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345'
]
)