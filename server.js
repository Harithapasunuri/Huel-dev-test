const { sleep, randomIntFromInterval } = require('./helpers')

require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get('/healthz', async (req, res) => {
    await sleep(randomIntFromInterval(0.5, 6) * 1000)

    res.status(200).send({
        status: 'ok',
    })
})

app.listen(port, function() {
  console.log(`Server started on port ${port}`);
});
