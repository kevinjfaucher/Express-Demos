const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

const facts = [
    "Honey never spoils. Archaeologists have found pots honey in ancient Egypt",
    "Cats sleep 70% percent of the time during their lifespan",
    "There are more chickens on earth than there are people.",
    "Bears eat beats! Black bear is best!",
    "Lemons float, but limes sink.",
    "Cats are just demons in earth.",
    "The longest English word is 189,819 letters long.",
    "The tiny pocket in jeans was designed to store pocket watches.",
    "No number before 1,000 contains the letter A.",
    "Mt. Everest is the tallest mountain in the world at over 29K ft",
    "All mammals get goosebumps.",
    "Japan has one vending machine for every 40 people.",
    "Kevin cant go a single class without a typo.",
    "Avocados are actually fruits, not vegetables.",
    "The average cloud weighs over one million pounds.",
    "Wearing a necktie could reduce blood flow to your brain by up to 7.5 percent.",
    "Avocado is a berry",
    "Bananas are berries",
    "The first animals to travel to outer space were fruit flies.",
    "Ryan's deep dark secret.... is that he LOVES horror movies.",
    "Ketchup was once sold as medicine.",
    "The closest planet to the sun is Mercury.",
    "Bees can fly higher than Mount Everest.",
    "platypi? platypuses? are egg-laying mammals",
    "PALM TREES ARE GRASS",
    "Rome was actually build in a day",
    "When muted, hold down the space bar to speak temporarily in zoom",
    "Some ladybugs are male"
];

console.log(facts.length);

app.get('/api/facts', (req, res) => {
    res.json(facts);
});

app.get('/api/facts/random', (req, res) => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    res.json({ fact: randomFact });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});