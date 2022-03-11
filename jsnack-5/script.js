/**
 *
 *
    Crea un array di oggetti che rappresentino delle persone.
    Ogni persona ha un nome, un cognome e un'età.

    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */

    const names = ["reckless","rectangular","ready","real","realistic","reasonable","red","reflecting","regal","regular","reliable","relieved","remarkable","remorseful","remote","repentant","required","respectful","responsible","repulsive","revolving","rewarding","rich","rigid","right","ringed","ripe","roasted","robust","rosy","rotating","rotten","rough","round","rowdy","royal","rubbery","spectavid","voluminous","wan","warlike","warm","warmhearted","warped","wary","wasteful","watchful","waterlogged","watery","wavy","wealthy","weak","weary","webbed","wee","weekly","weepy","weighty","weird","welcome","well-documented","well-groomed","well-informed","well-lit","well-made","well-off","well-to-do","well-worn","wet","which","whimsical","whirlwind","whispered","white","whole","whopping","wicked","wide","wide-eyed","wiggly","wild","willing","wilted","winding","windy","winged","wiry","wise","witty","wobbly","woeful","wonderful","wooden","woozy","wordy","worldly","worn","worried","worrisome","worse","worst","worthless","worthwhile","worthy","wrathful","wretched","writhing","wrong","wry","yawning","yearly","yellow","yellowish","young","youthful","yummy","zany","zealous","zesty","zigzag","rocky"];

    const lasNames = ["people", "history", "way", "art", "world", "information", "map", "family", "government", "health", "system", "computer", "meat", "year", "thanks", "music", "person", "reading", "method", "data", "food", "understanding", "theory", "law", "bird", "literature", "problem", "software", "control", "knowledge", "power", "ability", "economics", "love", "internet", "television", "science", "library", "nature", "fact", "product", "idea", "temperature", "investment", "area", "society", "activity", "story", "magazine", "newspaper", "relationship", "teaching", "cell", "dealer", "debate", "finding", "lake", "member", "message", "phone", "scene", "appearance", "association", "concept", "customer", "death", "discussion", "housing", "inflation", "insurance", "mood", "woman", "advice", "blood", "effort", "expression", "importance", "opinion", "payment", "reality", "responsibility", "situation", "skill", "statement", "wealth", "application", "city", "county", "depth"];


const users = [];


for (i = 0; i < names.length; i++){
        const user =
        {
        user : names[Math.floor(Math.random() * names.length)][0].toUpperCase() + names[Math.floor(Math.random() * names.length)].substring(1),
        lastname : lasNames[Math.floor(Math.random() * lasNames.length)][0].toUpperCase() + lasNames[Math.floor(Math.random() * lasNames.length)].substring(1),
        age : Math.floor(Math.random() * ((100 + 1) - 0) + 0),
        };
    users.push(user);
};

console.table(users);

/* users.forEach((element) => {
    if (element.age >= 18) {
        console.log(`${element.user} ${element.lastname} u have ${element.age}, so u can drive! enjoy!`)
    } else {
        console.log(`${element.user} ${element.lastname} u have ${element.age}, so u can't drive mate, sorry.`);
    }
}); */

const usersLicense = users.map((element) => {
    if (element.age >= 18) {
        return (`Dear ${element.user} ${element.lastname}. you are ${element.age} years old, so you can drive! enjoy!`);
    } else {
        return (`Dear ${element.user} ${element.lastname}, you are ${element.age} years old, so you can't drive mate, sorry.`);
    }
});

console.table(usersLicense);