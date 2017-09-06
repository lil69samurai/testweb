var express = require('express');
var mongodb = require('mongodb');
var app = express();

app.get('',function(request,response){
	response.write('ok');
	response.end();
	
}); 