const path = require('path')
const express = require('express')

const app = express()

const mainRoutes = require('./routes/main')
const usersRoutes = require('./routes/users')

app.use('/', mainRoutes)
app.use('/users', usersRoutes)
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    res.send("I'm listening")
    res.end()
})

app.listen(3001)