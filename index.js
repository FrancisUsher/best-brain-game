const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const { execSync } = require('child_process')

const app = express()

app.use(bodyParser.json())

const port = 8080

const verifySignature = (payloadBody, compareSig) => {
  let hmac = buildEnvironmentHMAC().update(payloadBody)
  let signature = 'sha1=' + hmac.digest('hex')
  return crypto.timingSafeEqual(signature, compareSig)
}

const buildEnvironmentHMAC = () => {
  return crypto.createHmac('sha1, process.env.SECRET_TOKEN)
}

app.use('/', express.static('public'))

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

app.listen(port, () => console.log(`This app is running on port ${port}`))

