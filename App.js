var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/getLinkedinUser', function(req,res){
    code = req.query.code;
    var request = require('request');
    url = 'https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code='+code+'&redirect_uri=http://localhost:3000/linkedInRedirect&client_id=81y0p9iz2huzbk&client_secret=RYPYWae99eMjAaDR';
    var options = {
    'method': 'POST',
    'url': url,
    'headers': {
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  res.send(response.body);
});
});

app.listen(process.env.PORT  || 3001, function () {
  console.log('Example app listening on port 3001!');
});

