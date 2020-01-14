// console.log("Is this my first node project? 🤟")

const myChalk = require('chalk');
const myHttp = require('http');
require('dotenv').config();

console.log(myChalk.blueBright.bold("Is this my first node project? 🤟"));

const myServer = myHttp.createServer((request, response) => {
    console.log(`Requested URL is ${request.url}`)
    if (request.url === '/') {
        response.write('You requested localhost:3000 my friend!');
        response.end();
    } else if (request.url === '/ptwd102019') {
        response.write(`
        That is our class: Rocket.
        `);
        response.end();
    }
});

// myServer.listen(3000, () => console.log('We are 🏃‍♂️ on port 3000'));
myServer.listen(process.env.PORT, () => console.log('We are 🏃‍♂️ on port 3000'));