const { sleep, randomIntFromInterval } = require('./helpers');

(async () => {
    while (true) {
        await sleep(randomIntFromInterval(1, 10) * 500)
        console.log('Processed job!')
    }
})()
