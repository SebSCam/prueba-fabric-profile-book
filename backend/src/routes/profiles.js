const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    fetch('https://randomuser.me/api/')
    .then((response) => response.json()) 
    .then(json => res.send(json.results))   
    .catch(err => console.log('Solicitud fallida', err));
});

router.post("/", (req, res) => {});

module.exports = router;