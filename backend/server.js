const http = require('http');
const express = require('./middleware.js')
const server = http.createServer(express)

server.listen(3000)