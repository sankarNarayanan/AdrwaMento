var express = require('express');
var app = express();
var cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/getLinkedinUser', function(req,res){
    code = req.query.code;
    var request = require('request');
    url = 'https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code='+code+'&redirect_uri=https://adrwamento.com/weblearning/linkedInRedirect/&client_id=81y0p9iz2huzbk&client_secret=RYPYWae99eMjAaDR';
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


app.get('/getQuestions', function(req,res){
    const questionArray = [{"rid":1,"id":512,"Qtype":0,"isFree":1,"qstatus":"A","question":"Management of uncomplicated diverticular disease consists of 1\n","answers":"[\"High-fiber diet 1.\\n\",\"Anticholinergics 1.\\n\",\"Sedatives.\\n\",\"Antibiotics.\\n\",\"Colonic resection.\\n\"]","category":"[\"Basic Sciences~Pathology\"]","explanation":"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\n","referance":null,"correctAnswer":"[0]","isflagged":0,"isfavort":0,"type":1,"count":0,"status":"U","datetime":"","active":"A","tag":"","title":"","isMath":0,"caseStudyId":0}, 
    {"rid":2,"id":5121,"Qtype":0,"isFree":1,"qstatus":"A","question":"Management of uncomplicated diverticular disease consists of 2\n","answers":"[\"High-fiber diet 2.\\n\",\"Anticholinergics 2.\\n\",\"Sedatives.\\n\",\"Antibiotics.\\n\",\"Colonic resection.\\n\"]","category":"[\"Basic Sciences~Pathology\"]","explanation":"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\n","referance":null,"correctAnswer":"[0]","isflagged":0,"isfavort":0,"type":1,"count":0,"status":"U","datetime":"","active":"A","tag":"","title":"","isMath":0,"caseStudyId":0},
    {"rid":3,"id":5122,"Qtype":0,"isFree":1,"qstatus":"A","question":"Management of uncomplicated diverticular disease consists of 3\n","answers":"[\"High-fiber diet 3.\\n\",\"Anticholinergics 3.\\n\",\"Sedatives.\\n\",\"Antibiotics.\\n\",\"Colonic resection.\\n\"]","category":"[\"Basic Sciences~Pathology\"]","explanation":"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\n","referance":null,"correctAnswer":"[0]","isflagged":0,"isfavort":0,"type":1,"count":0,"status":"U","datetime":"","active":"A","tag":"","title":"","isMath":0,"caseStudyId":0},
    {"rid":4,"id":5123,"Qtype":0,"isFree":1,"qstatus":"A","question":"Management of uncomplicated diverticular disease consists of 4\n","answers":"[\"High-fiber diet 4.\\n\",\"Anticholinergics 4.\\n\",\"Sedatives.\\n\",\"Antibiotics.\\n\",\"Colonic resection.\\n\"]","category":"[\"Basic Sciences~Pathology\"]","explanation":"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\n","referance":null,"correctAnswer":"[0]","isflagged":0,"isfavort":0,"type":1,"count":0,"status":"U","datetime":"","active":"A","tag":"","title":"","isMath":0,"caseStudyId":0},
    {"rid":5,"id":5124,"Qtype":0,"isFree":1,"qstatus":"A","question":"Management of uncomplicated diverticular disease consists of 5\n","answers":"[\"High-fiber diet 5.\\n\",\"Anticholinergics 5.\\n\",\"Sedatives.\\n\",\"Antibiotics.\\n\",\"Colonic resection.\\n\"]","category":"[\"Basic Sciences~Pathology\"]","explanation":"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\n","referance":null,"correctAnswer":"[0]","isflagged":0,"isfavort":0,"type":1,"count":0,"status":"U","datetime":"","active":"A","tag":"","title":"","isMath":0,"caseStudyId":0},
    {"rid":6,"id":5125,"Qtype":0,"isFree":1,"qstatus":"A","question":"Management of uncomplicated diverticular disease consists of 6\n","answers":"[\"High-fiber diet 6.\\n\",\"Anticholinergics 6.\\n\",\"Sedatives.\\n\",\"Antibiotics.\\n\",\"Colonic resection.\\n\"]","category":"[\"Basic Sciences~Pathology\"]","explanation":"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\n","referance":null,"correctAnswer":"[0]","isflagged":0,"isfavort":0,"type":1,"count":0,"status":"U","datetime":"","active":"A","tag":"","title":"","isMath":0,"caseStudyId":0},
    {"rid":7,"id":5126,"Qtype":0,"isFree":1,"qstatus":"A","question":"Management of uncomplicated diverticular disease consists of 7\n","answers":"[\"High-fiber diet 7.\\n\",\"Anticholinergics 7.\\n\",\"Sedatives.\\n\",\"Antibiotics.\\n\",\"Colonic resection.\\n\"]","category":"[\"Basic Sciences~Pathology\"]","explanation":"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\n","referance":null,"correctAnswer":"[0]","isflagged":0,"isfavort":0,"type":1,"count":0,"status":"U","datetime":"","active":"A","tag":"","title":"","isMath":0,"caseStudyId":0},
    {"rid":8,"id":5127,"Qtype":0,"isFree":1,"qstatus":"A","question":"Management of uncomplicated diverticular disease consists of 8\n","answers":"[\"High-fiber diet 8.\\n\",\"Anticholinergics 8.\\n\",\"Sedatives.\\n\",\"Antibiotics.\\n\",\"Colonic resection.\\n\"]","category":"[\"Basic Sciences~Pathology\"]","explanation":"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\n","referance":null,"correctAnswer":"[0]","isflagged":0,"isfavort":0,"type":1,"count":0,"status":"U","datetime":"","active":"A","tag":"","title":"","isMath":0,"caseStudyId":0},
    {"rid":9,"id":5128,"Qtype":0,"isFree":1,"qstatus":"A","question":"Management of uncomplicated diverticular disease consists of 9\n","answers":"[\"High-fiber diet 9.\\n\",\"Anticholinergics 9.\\n\",\"Sedatives.\\n\",\"Antibiotics.\\n\",\"Colonic resection.\\n\"]","category":"[\"Basic Sciences~Pathology\"]","explanation":"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\n","referance":null,"correctAnswer":"[0]","isflagged":0,"isfavort":0,"type":1,"count":0,"status":"U","datetime":"","active":"A","tag":"","title":"","isMath":0,"caseStudyId":0},
    {"rid":10,"id":5129,"Qtype":0,"isFree":1,"qstatus":"A","question":"Management of uncomplicated diverticular disease consists of 10\n","answers":"[\"High-fiber diet 10.\\n\",\"Anticholinergics 10.\\n\",\"Sedatives.\\n\",\"Antibiotics.\\n\",\"Colonic resection.\\n\"]","category":"[\"Basic Sciences~Pathology\"]","explanation":"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\n","referance":null,"correctAnswer":"[0]","isflagged":0,"isfavort":0,"type":1,"count":0,"status":"U","datetime":"","active":"A","tag":"","title":"","isMath":0,"caseStudyId":0}
    ]; 
    res.send({questions: questionArray});
});


app.get('/authenticateUser', function(req, res){
    // var requestObj = JSON.parse(req);
    // var name = responseObj.name;
    // var email = responseObj.email;
    // var password = responseObj.password;
    res.send('{\"courseDetails\":{\"menu\":{\"book\":1}},\"useDetails\":{\"name\":\"\",\"profieImage\":\"\",\"appSetting\":{},\"account\":{}},\"auth\":{\"token\":\"\",\"refreshtoken\":\"\"}}');

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

const questionArray = ['{\"rid\":1,\"id\":512,\"Qtype\":0,\"isFree\":1,\"qstatus\":\"A\",\"question\":\"Management of uncomplicated diverticular disease consists of\\n\",\"answers\":\"[\\\"High-fiber diet.\\\\n\\\",\\\"Anticholinergics.\\\\n\\\",\\\"Sedatives.\\\\n\\\",\\\"Antibiotics.\\\\n\\\",\\\"Colonic resection.\\\\n\\\"]\",\"category\":\"[\\\"Basic Sciences~Pathology\\\"]\",\"explanation\":\"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\\n\",\"referance\":null,\"correctAnswer\":\"[0]\",\"isflagged\":0,\"isfavort\":0,\"type\":1,\"count\":0,\"status\":\"U\",\"datetime\":\"\",\"active\":\"A\",\"tag\":\"\",\"title\":\"\",\"isMath\":0,\"caseStudyId\":0}', 
'{\"rid\":1,\"id\":512,\"Qtype\":0,\"isFree\":1,\"qstatus\":\"A\",\"question\":\"Management of uncomplicated diverticular disease consists of\\n\",\"answers\":\"[\\\"High-fiber diet.\\\\n\\\",\\\"Anticholinergics.\\\\n\\\",\\\"Sedatives.\\\\n\\\",\\\"Antibiotics.\\\\n\\\",\\\"Colonic resection.\\\\n\\\"]\",\"category\":\"[\\\"Basic Sciences~Pathology\\\"]\",\"explanation\":\"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\\n\",\"referance\":null,\"correctAnswer\":\"[0]\",\"isflagged\":0,\"isfavort\":0,\"type\":1,\"count\":0,\"status\":\"U\",\"datetime\":\"\",\"active\":\"A\",\"tag\":\"\",\"title\":\"\",\"isMath\":0,\"caseStudyId\":0}',
'{\"rid\":1,\"id\":512,\"Qtype\":0,\"isFree\":1,\"qstatus\":\"A\",\"question\":\"Management of uncomplicated diverticular disease consists of\\n\",\"answers\":\"[\\\"High-fiber diet.\\\\n\\\",\\\"Anticholinergics.\\\\n\\\",\\\"Sedatives.\\\\n\\\",\\\"Antibiotics.\\\\n\\\",\\\"Colonic resection.\\\\n\\\"]\",\"category\":\"[\\\"Basic Sciences~Pathology\\\"]\",\"explanation\":\"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\\n\",\"referance\":null,\"correctAnswer\":\"[0]\",\"isflagged\":0,\"isfavort\":0,\"type\":1,\"count\":0,\"status\":\"U\",\"datetime\":\"\",\"active\":\"A\",\"tag\":\"\",\"title\":\"\",\"isMath\":0,\"caseStudyId\":0}',
'{\"rid\":1,\"id\":512,\"Qtype\":0,\"isFree\":1,\"qstatus\":\"A\",\"question\":\"Management of uncomplicated diverticular disease consists of\\n\",\"answers\":\"[\\\"High-fiber diet.\\\\n\\\",\\\"Anticholinergics.\\\\n\\\",\\\"Sedatives.\\\\n\\\",\\\"Antibiotics.\\\\n\\\",\\\"Colonic resection.\\\\n\\\"]\",\"category\":\"[\\\"Basic Sciences~Pathology\\\"]\",\"explanation\":\"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\\n\",\"referance\":null,\"correctAnswer\":\"[0]\",\"isflagged\":0,\"isfavort\":0,\"type\":1,\"count\":0,\"status\":\"U\",\"datetime\":\"\",\"active\":\"A\",\"tag\":\"\",\"title\":\"\",\"isMath\":0,\"caseStudyId\":0}',
'{\"rid\":1,\"id\":512,\"Qtype\":0,\"isFree\":1,\"qstatus\":\"A\",\"question\":\"Management of uncomplicated diverticular disease consists of\\n\",\"answers\":\"[\\\"High-fiber diet.\\\\n\\\",\\\"Anticholinergics.\\\\n\\\",\\\"Sedatives.\\\\n\\\",\\\"Antibiotics.\\\\n\\\",\\\"Colonic resection.\\\\n\\\"]\",\"category\":\"[\\\"Basic Sciences~Pathology\\\"]\",\"explanation\":\"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\\n\",\"referance\":null,\"correctAnswer\":\"[0]\",\"isflagged\":0,\"isfavort\":0,\"type\":1,\"count\":0,\"status\":\"U\",\"datetime\":\"\",\"active\":\"A\",\"tag\":\"\",\"title\":\"\",\"isMath\":0,\"caseStudyId\":0}',
'{\"rid\":1,\"id\":512,\"Qtype\":0,\"isFree\":1,\"qstatus\":\"A\",\"question\":\"Management of uncomplicated diverticular disease consists of\\n\",\"answers\":\"[\\\"High-fiber diet.\\\\n\\\",\\\"Anticholinergics.\\\\n\\\",\\\"Sedatives.\\\\n\\\",\\\"Antibiotics.\\\\n\\\",\\\"Colonic resection.\\\\n\\\"]\",\"category\":\"[\\\"Basic Sciences~Pathology\\\"]\",\"explanation\":\"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\\n\",\"referance\":null,\"correctAnswer\":\"[0]\",\"isflagged\":0,\"isfavort\":0,\"type\":1,\"count\":0,\"status\":\"U\",\"datetime\":\"\",\"active\":\"A\",\"tag\":\"\",\"title\":\"\",\"isMath\":0,\"caseStudyId\":0}',
'{\"rid\":1,\"id\":512,\"Qtype\":0,\"isFree\":1,\"qstatus\":\"A\",\"question\":\"Management of uncomplicated diverticular disease consists of\\n\",\"answers\":\"[\\\"High-fiber diet.\\\\n\\\",\\\"Anticholinergics.\\\\n\\\",\\\"Sedatives.\\\\n\\\",\\\"Antibiotics.\\\\n\\\",\\\"Colonic resection.\\\\n\\\"]\",\"category\":\"[\\\"Basic Sciences~Pathology\\\"]\",\"explanation\":\"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\\n\",\"referance\":null,\"correctAnswer\":\"[0]\",\"isflagged\":0,\"isfavort\":0,\"type\":1,\"count\":0,\"status\":\"U\",\"datetime\":\"\",\"active\":\"A\",\"tag\":\"\",\"title\":\"\",\"isMath\":0,\"caseStudyId\":0}',
'{\"rid\":1,\"id\":512,\"Qtype\":0,\"isFree\":1,\"qstatus\":\"A\",\"question\":\"Management of uncomplicated diverticular disease consists of\\n\",\"answers\":\"[\\\"High-fiber diet.\\\\n\\\",\\\"Anticholinergics.\\\\n\\\",\\\"Sedatives.\\\\n\\\",\\\"Antibiotics.\\\\n\\\",\\\"Colonic resection.\\\\n\\\"]\",\"category\":\"[\\\"Basic Sciences~Pathology\\\"]\",\"explanation\":\"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\\n\",\"referance\":null,\"correctAnswer\":\"[0]\",\"isflagged\":0,\"isfavort\":0,\"type\":1,\"count\":0,\"status\":\"U\",\"datetime\":\"\",\"active\":\"A\",\"tag\":\"\",\"title\":\"\",\"isMath\":0,\"caseStudyId\":0}',
'{\"rid\":1,\"id\":512,\"Qtype\":0,\"isFree\":1,\"qstatus\":\"A\",\"question\":\"Management of uncomplicated diverticular disease consists of\\n\",\"answers\":\"[\\\"High-fiber diet.\\\\n\\\",\\\"Anticholinergics.\\\\n\\\",\\\"Sedatives.\\\\n\\\",\\\"Antibiotics.\\\\n\\\",\\\"Colonic resection.\\\\n\\\"]\",\"category\":\"[\\\"Basic Sciences~Pathology\\\"]\",\"explanation\":\"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\\n\",\"referance\":null,\"correctAnswer\":\"[0]\",\"isflagged\":0,\"isfavort\":0,\"type\":1,\"count\":0,\"status\":\"U\",\"datetime\":\"\",\"active\":\"A\",\"tag\":\"\",\"title\":\"\",\"isMath\":0,\"caseStudyId\":0}',
'{\"rid\":1,\"id\":512,\"Qtype\":0,\"isFree\":1,\"qstatus\":\"A\",\"question\":\"Management of uncomplicated diverticular disease consists of\\n\",\"answers\":\"[\\\"High-fiber diet.\\\\n\\\",\\\"Anticholinergics.\\\\n\\\",\\\"Sedatives.\\\\n\\\",\\\"Antibiotics.\\\\n\\\",\\\"Colonic resection.\\\\n\\\"]\",\"category\":\"[\\\"Basic Sciences~Pathology\\\"]\",\"explanation\":\"A high-fiber diet is usually all that is needed in the management of diverticular disease. Anticholinergics, sedatives, and antibiotics are of no use. Colonic resection is not indicated in uncomplicated disease. Red meat will adversely affect the disease.\\n\",\"referance\":null,\"correctAnswer\":\"[0]\",\"isflagged\":0,\"isfavort\":0,\"type\":1,\"count\":0,\"status\":\"U\",\"datetime\":\"\",\"active\":\"A\",\"tag\":\"\",\"title\":\"\",\"isMath\":0,\"caseStudyId\":0}',
]; 

