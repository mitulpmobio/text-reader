var express = require('express');
var router = express.Router();
var textract = require('textract');

/* GET users listing. */
router.get('/', function(req, res, next) {
  textract.fromUrl('http://www.orimi.com/pdf-test.pdf', function( error, text ) {
    res.send(text);
  })
  
});

module.exports = router;
