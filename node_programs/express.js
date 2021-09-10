const express = require('express');
const app = express();

app.listen(4545);

app.get('', (req, res) => {
    res.send(`
        <h1>This is home page</h1>
        <hr><a href="/help">Help</a>
    `);
})

app.get('/help', (req, res) => {
    res.send(`
        <h1>This is Help page</h1>
        <form action="/help" method="post">
            <input type="text" name="name" placeholder="Enter your name...">
            <input type="submit" name="save" value="Send">
        </form>
        <hr><a href="/">Home</a>
    `);
})

app.get('/about', (req, res) => {
    res.send(`
        <h1>This is about page</h1><br>Your Name: ${req.query.name}
        <hr><a href="/">Home</a>
    `);
})