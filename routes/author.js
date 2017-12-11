var express = require('express');
var router = express.Router();
var request = require('request');


/* GET Authors page. */
router.get('/', function(req, res, next) {
var resdata="";



				
request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred and handle it
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
     
		 var  jsondata= JSON.parse(body);
		  //var post= JSON.parse(postdata);
		  request('https://jsonplaceholder.typicode.com/posts', function(error, response, resbody){
					console.log('error:', error); // Print the error if one occurred and handle it
					console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
					var postdata=JSON.parse(resbody);
				
		  for (var i=0; i<jsondata.length; i++){
				var postCount=0;
				for(var j=0; j<postdata.length; j++)
				{
				 if(postdata[j].userId==jsondata[i].id	)
				 {
					 postCount+=1;
				 }
				}
				resdata+=jsondata[i].name + " has Post count: " + postCount;
				resdata+='</br>';			
				
			}
			
	  res.send(resdata); 
		  });
    });

	

});

module.exports = router;