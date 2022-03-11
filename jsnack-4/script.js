/**
 *
 *
    Crea un array di oggetti che rappresentano degli animali.
    Ogni animale ha un nome, una famiglia e una classe.
    Es:

    [
        { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
        { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]

    Crea un nuovo array con la lista dei mammiferi.

 *
 */

const animals = [
    {
        type: 'leone',
        family: 'felidi',
        class: 'mammiferi',
    },
    {
        type: 'lince',
        family: 'felini',
        class: 'mammiferi',
    },
    {
        type: 'gatto',
        family: 'felini',
        class: 'mammiferi',
    },
    {
        type: 'gallina',
        family: 'fasianidi',
        class: 'uccelli',
    },
    {
        type: 'cane',
        family: 'canidi',
        class: 'mammiferi',
    },
    {
        type: 'acquila',
        family: 'Accipitridae',
        class: 'uccelli',
    },
]

const mammals = animals.filter((element) => {
    if (element.class == 'mammiferi') return true;
})
console.table(mammals);
