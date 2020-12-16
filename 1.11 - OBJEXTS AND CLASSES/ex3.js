function parse(objAsString){
    let parsedObj = JSON.parse(objAsString);

    for(let key of Object.keys(parsedObj)){
        console.log(`${key}: ${parsedObj[key]}`)
    }
}
