const end = () => {
    console.log('function selesai dijalankan')
}

const callback = (value) => {
    console.log(value)
}

const array = [1, 2, 3, 4, 5]

const forEach = (array, callback, end) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
    end()
}
forEach(array, callback, end)
