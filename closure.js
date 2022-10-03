const sayHello = (name) => {
    
    return (waktu) => {
        console.log(`Halo ${name}, Selamat ${waktu}!`);
    }

}

const selamatPagi = sayHello("John");
selamatPagi("Pagi");
