const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const router = require("./routes");
const db = require("./config/db");
app.use(express.json());

app.get("/", async (req, res) => {
    return res.status(200).send("Muie galati");
})

app.get("/reset", async (req, res) => {
    try {
        await db.sync({ force: true });
        return res.status(200).send("Baza de date a fost resetata cu succes");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Server error");
    }
})

app.use("/api", router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});