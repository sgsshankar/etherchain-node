var express = require('express');
var etherchain = require('./etherchain');

var app = express();
var port = 3000;

app.get('/', function(req, res) {
	res.send("Express app for etherchain api ");
});

app.get('/api/basic_stats', function(req, res) {
	var response = etherchain.getBasicStats().then(function(response) {
		res.send(response);
	});
});

app.get('/api/blocks/:offset/:count', function(req, res) {
	var response = etherchain.getBlocks(req.params.offset, req.params.count).then(function(response) {
		res.send(response);
	});
});

app.get('/api/block/:id', function(req, res) {
	var response = etherchain.getBlock(req.params.id).then(function(response) {
		res.send(response);
	});
});

app.get('/api/block/:id/tx', function(req, res) {
	var response = etherchain.getBlockTransaction(req.params.id).then(function(response) {
		res.send(response);
	});
});

app.get('/api/tx/:id', function(req, res) {
	var response = etherchain.getTransaction(req.params.id).then(function(response) {
		res.send(response);
	});
});

app.get('/api/account/:id', function(req, res) {
	var response = etherchain.getAccount(req.params.id).then(function(response) {
		res.send(response);
	});
});

app.get('/api/account/:id/tx/:offset', function(req, res) {
	var response = etherchain.getAccountTransaction(req.params.id, req.params.offset).then(function(response) {
		res.send(response);
	});
});

var server = app.listen(port, function() {
	console.log("open browser to http://localhost:3000/");
});