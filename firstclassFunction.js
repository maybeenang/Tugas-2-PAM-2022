// Di assign ke dalam variable, object, array, dll
const sumNumbers = (a, b) => {
    console.log(a + b)
}
console.log("Di assign ke dalam variable, object, array")
sumNumbers(89, 16);

// Di passing sebagai argument ke dalam function
function randomNumbers() {
    return Math.floor(Math.random() * 100)
}

function sumRandomNumbers(a, b) {
    console.log(`a = ${a}, b = ${b}`)
    return a + b;
}
console.log("Di passing sebagai argument ke dalam function")
console.log(sumRandomNumbers(randomNumbers(), randomNumbers()))

// Di return sebagai value dari function
const sayHello = (name) => {
    return (waktu) => {
        console.log(`Hello ${name}, Selamat ${waktu}`)
    }
}
console.log("Di return sebagai value dari function")
sayHello("Rizky")("Pagi")
