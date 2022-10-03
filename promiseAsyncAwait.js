const jadwalKuliah = [
    {
        hari : "Senin",
        mataKuliah : "Pemrograman Web"
    }, 
    {
        hari : "Selasa",
        mataKuliah : "Pengembangan Aplikasi Mobile"
    }
]

const tambahJadwal = (jadwalBaru) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            jadwalKuliah.push(jadwalBaru);
            resolve(jadwalKuliah);
        }, 2000);
    });
}

const tampilJadwal = () => {
    setTimeout(() => {
        jadwalKuliah.forEach((jadwal) => {
            for (let key in jadwal) {
                console.log(`${key} : ${jadwal[key]}`);
            }
        });
    }, 1000);
}

const jadwalBaru = {
    hari : "Rabu",
    mataKuliah : "Jaringan Komputer"
}

const main = async () => {
    await tambahJadwal(jadwalBaru);
    tampilJadwal();
}

main();