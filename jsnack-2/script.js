/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */


const cars = [
    {
        brand: 'ford',
        model: 'focus',
        powersupply: 'benzina',
    },
    {
        brand: 'ford',
        model: 'fiesta',
        powersupply: 'benzina',
    },
    {
        brand: 'toyota',
        model: 'yaris',
        powersupply: 'diesel',
    },
    {
        brand: 'honda',
        model: 'assassina',
        powersupply: 'benzina',
    },
    {
        brand: 'fiat',
        model: 'panda',
        powersupply: 'elettrica',
    },
    {
        brand: 'toyota',
        model: 'focus',
        powersupply: 'metano',
    },
    {
        brand: 'nissan',
        model: 'focus',
        powersupply: 'metano',
    },
    {
        brand: 'nissan',
        model: 'focus',
        powersupply: 'diesel',
    },
    {
        brand: 'fiat',
        model: 'focus',
        powersupply: 'benzina',
    },
    {
        brand: 'alfa-romeo',
        model: 'focus',
        powersupply: 'elettrica',
    },
    {
        brand: 'ford',
        model: 'puma',
        powersupply: 'elettrica',
    },
    {
        brand: 'fiat',
        model: 'assd',
        powersupply: 'metano',
    },
    {
        brand: 'ford',
        model: 'mondeo',
        powersupply: 'benzina',
    },
    {
        brand: 'ford',
        model: 'carrettone',
        powersupply: 'diesel',
    },
];



const dieselCar = cars.filter((element) => {
    if (element.powersupply == 'diesel') return true;
})

const gasolineCar = cars.filter((element) => {
    if (element.powersupply == 'benzina') return true;
})

const otherslCar = cars.filter((element) => {
    if (element.powersupply != 'diesel' && element.powersupply != 'benzina') return true;
})

console.table(dieselCar);
console.table(gasolineCar);
console.table(otherslCar);

console.table(cars);
