'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _child_process = require('child_process');

var _githubWebhook = require('./lib/github-webhook.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

var port = 8080;

app.post('/api/webhook-site-update', function (req, res) {
  var payloadBody = req.body;
  var compareSig = req.header('X-Hub-Signature');
  if ((0, _githubWebhook.verifySignature)(JSON.stringify(payloadBody), compareSig)) {
    res.send(200, 'Thanks for the info Github!');
    (0, _child_process.execSync)('git pull');
    (0, _child_process.execSync)('pm2 restart index.js');
  } else {
    res.send(401, 'Invalid signature. Are you really Github?');
  }
});

app.use('/public/', _express2.default.static('public'));

app.listen(port, function () {
  return console.log('This app is running on port ' + port);
});