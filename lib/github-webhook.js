'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifySignature = undefined;

var _crypto = require('crypto');

function verifySignature(payloadBody, compareSig) {
  var hmac = buildEnvironmentHMAC().update(payloadBody);
  var signature = 'sha1=' + hmac.digest('hex');
  var signatureBuffer = Buffer.from(signature, 'utf8');
  var compareSigBuffer = Buffer.from(compareSig, 'utf8');
  return (0, _crypto.timingSafeEqual)(signatureBuffer, compareSigBuffer);
}

function buildEnvironmentHMAC() {
  var token = process.env.SECRET_TOKEN;
  if (token != null) {
    return (0, _crypto.createHmac)('sha1', token);
  } else {
    throw TypeError('Secret token value was empty, not a string.');
  }
}

exports.verifySignature = verifySignature;