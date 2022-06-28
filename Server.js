const express = require("express");
const app = express()
const userRouter = require("./routes/routerUsers")
const announceRouter = require("./routes//routerAnnounces")
const gameRouter = require('./routes/routerGames')
const consoleRouter = require("./routes/routerConsoles")
const relationRouter = require("./routes/routerRelation")
const bodyParser = require('body-parser')

// app.use(express.json())



app.use(function(request, response, next) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "Accept, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT,DELETE,OPTIONS");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(bodyParser.json())


app.use('/users', userRouter)
app.use('/announces', announceRouter)
app.use('/games', gameRouter)
app.use('/consoles', consoleRouter)
app.use('/relation', relationRouter)

app.listen(5000, () => {
    console.log('serveur connecté sur le port 5000');
})