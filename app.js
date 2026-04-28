const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("changed version Hello DevOps Pipeline Working!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
