var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	
		res.render('index', { MyName: 'Ritika' });
	
});

router.post('/', function(req, res, next) {
	
	var postData= req.body.name;
	
		console.log(postData);
		res.render('index', { MyName: postData });

});

router.get('/setCookie', function(req, res){

	res.cookie('name' , 'Ritika');
	res.cookie('age' , '26');
	res.send('Cookie is set');
	
	});
router.get('/getCookie', function(req,res){
	res.send(req.cookies);
});
router.get('/robots.txt', function(req,res){
	res.redirect('http://httpbin.org/deny');
});
router.get('/image', function(req, res){
	res.render('myImage');
});
router.get('/input', function(req,res){
	res.render('myInputPage');
});
module.exports = router;
