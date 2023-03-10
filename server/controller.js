let fortunes = ["I see doom in your future", "Today is your lucky day", "I see only a small amount of doom in your future", "you will meet someone important today", "You will die! Someday..."]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    customeFortune: (req, res) => {
        if (fortunes.length > 5) {
            res.sendStatus(400)
        }
        const input = req.body.input
        fortunes.push(input)
        res.sendStatus(200)
    },

    deleteFortune: (req, res) => {
        if(fortunes.length > 5) {
            fortunes.splice(-1)
            console.log(fortunes)
            res.sendStatus(200)

        }
        res.sendStatus(400)
        
    },

    replaceFortune: (req, res) => {

        if (fortunes.length > 5) {
            let input = req.body.input
            fortunes[(fortunes.length - 1)] = input
            res.sendStatus(200)
        }

        res.sendStatus(400)

        

    }

}