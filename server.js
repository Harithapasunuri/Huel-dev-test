const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

app.get('/healthz', async (req, res) => {
    await sleep(randomIntFromInterval(0.5, 6) * 1000)

    res.status(200).send({
        status: 'ok',
    })
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
