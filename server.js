const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

app.get("/items", (req, res) => {
    res.json(items);
});

app.post("/add", (req, res) => {
    const { item } = req.body;
    if (item) {
        items.push(item);
    }
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});