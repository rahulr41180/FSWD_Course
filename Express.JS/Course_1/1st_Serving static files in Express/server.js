
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// virtual path
app.use(express.static(path.join(__dirname, "public")));


// If I want to show index.html file from a route.
app.get("/public", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

/*
When you set up a static folder using express.static, 
it serves static files directly from that folder without needing additional routes. 
However, using res.sendFile requires an absolute path or a correct relative path from the server's root directory, 
not the virtual path set up by express.static.
*/

app.get("/", (req, res) => {})

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});