const express = require('express')
const app = express()

const port = 8080

app.use('/static', express.static('public'))

app.get('/', (req, res) => res.send('index.html'))

app.listen(port, () => console.log(`This app is running on port ${port}`))
