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

app.delete("/delete/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if (!isNaN(index) && index >= 0 && index < items.length) {
        items.splice(index, 1);
    }
    res.json(items);
});

app.put("/update/:index", (req, res) => {
    const index = parseInt(req.params.index);
    const { newItem } = req.body;
    if (!isNaN(index) && index >= 0 && index < items.length && newItem) {
        items[index] = newItem;
    }
    res.json(items);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});