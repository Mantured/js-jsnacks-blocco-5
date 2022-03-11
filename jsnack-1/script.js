/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50

    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */

    const nomi = ["reckless","rectangular","ready","real","realistic","reasonable","red","reflecting","regal","regular","reliable","relieved","remarkable","remorseful","remote","repentant","required","respectful","responsible","repulsive","revolving","rewarding","rich","rigid","right","ringed","ripe","roasted","robust","rosy","rotating","rotten","rough","round","rowdy","royal","rubbery","spectavid","voluminous","wan","warlike","warm","warmhearted","warped","wary","wasteful","watchful","waterlogged","watery","wavy","wealthy","weak","weary","webbed","wee","weekly","weepy","weighty","weird","welcome","well-documented","well-groomed","well-informed","well-lit","well-made","well-off","well-to-do","well-worn","wet","which","whimsical","whirlwind","whispered","white","whole","whopping","wicked","wide","wide-eyed","wiggly","wild","willing","wilted","winding","windy","winged","wiry","wise","witty","wobbly","woeful","wonderful","wooden","woozy","wordy","worldly","worn","worried","worrisome","worse","worst","worthless","worthwhile","worthy","wrathful","wretched","writhing","wrong","wry","yawning","yearly","yellow","yellowish","young","youthful","yummy","zany","zealous","zesty","zigzag","rocky"];

    const cognomi = ["people", "history", "way", "art", "world", "information", "map", "family", "government", "health", "system", "computer", "meat", "year", "thanks", "music", "person", "reading", "method", "data", "food", "understanding", "theory", "law", "bird", "literature", "problem", "software", "control", "knowledge", "power", "ability", "economics", "love", "internet", "television", "science", "library", "nature", "fact", "product", "idea", "temperature", "investment", "area", "society", "activity", "story", "magazine", "newspaper", "relationship", "teaching", "cell", "dealer", "debate", "finding", "lake", "member", "message", "phone", "scene", "appearance", "association", "concept", "customer", "death", "discussion", "housing", "inflation", "insurance", "mood", "woman", "advice", "blood", "effort", "expression", "importance", "opinion", "payment", "reality", "responsibility", "situation", "skill", "statement", "wealth", "application", "city", "county", "depth"];


const player = {
    idplayer: '',
    name: '',
    lastname: '',
    age: '',
    avargescorepergame: '',
    positivescorefor3hitpercent:'',
};

player.idplayer = generatorID()
player.avargescorepergame = (Math.floor(Math.random() * (50 + 1) - 0) + 0);
player.positivescorefor3hitpercent = (Math.floor(Math.random() * (100 + 1) - 0) +0);
player.name = nomi[Math.floor(Math.random() * nomi.length)][0].toUpperCase() + nomi[Math.floor(Math.random() * nomi.length)].substring(1);
player.lastname = cognomi[Math.floor(Math.random() * cognomi.length)][0].toUpperCase() + cognomi[Math.floor(Math.random() * cognomi.length)].substring(1);
player.age = Math.floor(Math.random() * ((35 + 1) - 15) + 15);

function generatorID() {
    return makeID(3) + makeNumericId(3);
}

console.table(player);

function makeID(lenght) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXY';
    let charactersLenght = characters.length;

    for (let i = 0; i < lenght; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLenght));
    }
    return result;
}

function makeNumericId(lenght) {
    let result = '';
    let characters = '0123456789';
    let charactersLenght = characters.length;

    for (let i = 0; i < lenght; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLenght));
    }
    return result;
}


