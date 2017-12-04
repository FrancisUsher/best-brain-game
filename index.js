const express = require('express')
const bodyParser = require('body-parser')

const { execSync } = require('child_process')
const { verifySignature } = require('./src/js/github-webhook.js')

const app = express()

app.use(bodyParser.json())

const port = 8080

app.post('/api/webhook-site-update', (req, res) => {
  let payloadBody = req.body
  let compareSig = req.header('HTTP_X_HUB_SIGNATURE')
  if(verifySignature(payloadBody, compareSig)){
    res.send(200, 'Thanks for the info Github!')
    execSync('git pull')
    execSync('pm2 restart index.js')
  } else {
    res.send(401, 'Invalid signature. Are you really Github?')
  }
})

app.use('/public/', express.static('public'))

app.listen(port, () => console.log(`This app is running on port ${port}`))

