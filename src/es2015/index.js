// @flow

import express from 'express'
import bodyParser from 'body-parser'
import { execSync } from 'child_process'

import { verifySignature } from './lib/github-webhook.js'

const app = express()

app.use(bodyParser.json())

app.use('/', express.static('public'))

const port = 8080

app.post('/api/webhook-site-update', (req, res) => {
  let payloadBody = req.body
  let compareSig = req.header('X-Hub-Signature')
  if(verifySignature(JSON.stringify(payloadBody), compareSig)){
    res.send(200, 'Thanks for the info Github!')
    execSync('git pull')
    execSync('pm2 restart index.js')
  } else {
    res.send(401, 'Invalid signature. Are you really Github?')
  }
})

app.listen(port, () => console.log(`This app is running on port ${port}`))