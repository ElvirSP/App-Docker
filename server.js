const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get("/", (req, res) => {
    res.send("¡Hola desde Render con Docker! 🚀");
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});