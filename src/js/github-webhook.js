const crypto = require('crypto')

const verifySignature = (payloadBody, compareSig) => {
  let hmac = buildEnvironmentHMAC().update(payloadBody)
  let signature = 'sha1=' + hmac.digest('hex')
  return crypto.timingSafeEqual(signature, compareSig)
}

const buildEnvironmentHMAC = () => {
  return crypto.createHmac('sha1', process.env.SECRET_TOKEN)
}

module.exports = { verifySignature }