const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, customeFortune, deleteFortune, replaceFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/fortune", customeFortune)
app.delete("/api/fortune", deleteFortune)
app.put("/api/fortune", replaceFortune)

app.listen(4000, () => console.log("Server running on 4000"));
