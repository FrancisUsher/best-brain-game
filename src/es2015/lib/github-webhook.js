// @flow

import { timingSafeEqual, createHmac } from 'crypto'

function verifySignature(payloadBody: string, compareSig: string){
  let hmac = buildEnvironmentHMAC().update(payloadBody)
  let signature = 'sha1=' + hmac.digest('hex')
  let signatureBuffer = Buffer.from(signature, 'utf8')
  let compareSigBuffer = Buffer.from(compareSig, 'utf8')
  return timingSafeEqual(signatureBuffer, compareSigBuffer)
}

function buildEnvironmentHMAC(){
  let token: ?string = process.env.SECRET_TOKEN
  if (token != null) {
    return createHmac('sha1', token)
  } else {
    throw TypeError('Secret token value was empty, not a string.')
  }
  
}

export { verifySignature }