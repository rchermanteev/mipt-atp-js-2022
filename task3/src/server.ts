const express = require('express')
const path = require('path');

const app = express();
const DIST_DIR = "./dist/";
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const PORT = 9000;
            
app.use(express.static(DIST_DIR));
            
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
});

app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT)
});