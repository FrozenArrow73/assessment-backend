module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["I see doom in your future", "Today is your lucky day", "I see only a small amount of doom in your future", "you will meet someone important today", "You will die! Someday..."]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    customeFortune: (req, res) => {
        res.sendStatus(200)
    },

    deleteFortune: (req, res) => {
        res.sendStatus(200)
    },

    replaceFortune: (req, res) => {
        res.sendStatus(200)
    }

}