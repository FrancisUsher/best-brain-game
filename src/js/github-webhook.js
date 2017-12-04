const crypto = require('crypto')

function verifySignature(payloadBody, compareSig){
  let hmac = buildEnvironmentHMAC().update(payloadBody)
  let signature = 'sha1=' + hmac.digest('hex')
  return crypto.timingSafeEqual(signature, compareSig)
}

function buildEnvironmentHMAC(){
  return crypto.createHmac('sha1', process.env.SECRET_TOKEN)
}

module.exports = { verifySignature }