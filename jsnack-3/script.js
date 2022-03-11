/**
 *
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 *
 */


const disney = ['PipPo', 'MinnIe', 'PaPERIno', 'TOPOLINO',]


const newDisney = disney.map((element) => {

    /* return element.charAt(0).toUpperCase() + element.slice(1).trim().toLowerCase(); */
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase(); //? altra versione

})

console.table(newDisney);
