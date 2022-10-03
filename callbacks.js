const callback = (result) => {
    console.log(result + 10)
}

const sumNumber = (a, b, callback) => {

    let result = a + b
    
    callback(result)
    return result
}

console.log(sumNumber(1, 2, callback))
