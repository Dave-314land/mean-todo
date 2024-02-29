const express = require('express');

const app = express();

let tasks = [
    {id: 1, date:'03-October-24', entry:'Walk Dog'},
    {id: 2, date:'04-October-24', entry: 'Eat'},
    {id: 3, date:'05-October-24', entry:'Sleep'},
    {id: 4, date:'06-October-24', entry:'Code'}
];

app.get('/tasks', (req, res, next) => {
    res.json({'tasks': tasks})
})

module.exports = app;
