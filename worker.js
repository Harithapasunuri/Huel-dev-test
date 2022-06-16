function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

setInterval(() => {
    console.log('Processed job!');
}, randomIntFromInterval(1, 10) * 1000)
