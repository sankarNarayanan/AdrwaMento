var express = require('express');
var app = express();
const port = process.env.PORT || 3001;

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
  console.log(response.body);
  var responseObj = JSON.parse(response.body);
  if(responseObj.hasOwnProperty('access_token')){
     getUserEmail(responseObj['access_token'], res);
    }else{
    res.send(response.body);
    }
});
});

app.listen(port, function () {
  console.log('Example app listening on port 3001!');
});

function getUserEmail(accessToken, res){
    console.log('email method called');
    var request = require('request');
    var options = {
    'method': 'GET',
    'url': 'https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~))',
    'headers': {
        'Authorization': 'Bearer '+accessToken
    }
    };
    request(options, function (error, response) { 
    if (error) throw new Error(error);
    res.send(response.body);
    });

}

