function solve(string){
    let i = string.lastIndexOf('.')
    let extension = string.substring(i+1)
    let fileName = string.slice(string.lastIndexOf('\\') + 1, i)

    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extension}`)

}
solve('C:\\Internal\\training-internal\\Template.pptx' )