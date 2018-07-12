var unirest = require("unirest");
var querystring = require("querystring");
var config = require('./config');
var Promise = require('promise/domains');

module.exports = {

	getBasicStats: function() {
		var url = config.config.basicStats;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getBlocks: function(offset, count) {
		var url = config.config.blocks + offset + "/" + count;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getBlock: function(txId) {
		var url = config.config.block + txId;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getBlockTransaction: function(txId) {
		var url = config.config.block + txId + "/tx";
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getTransaction: function(txId) {
		var url = config.config.transaction + txId;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getAccount: function(txId) {
		var url = config.config.account + txId;
		var result = sendRequest(url, 'GET', {});
		return result;
	},

	getAccountTransaction: function(txId, offset) {
		var url = config.config.accountTransaction + txId + "/txs?start=" + offset + "&length=100";
		var result = sendRequest(url, 'GET', {});
		return result;
	}
};

function sendRequest(fullpath, method, querystring) {

	var options = {
		url: config.config.hostUrl + fullpath,
		qs: querystring,
		method: method,
		headers: {
			'Content-Type': 'multipart/text',
			'User-Agent': 'etherchain',
			'Accept': 'multipart/text'
		}
	};

	return new Promise(function(resolve, reject) {
		if (method == "GET") {
			unirest.get(options.url)
				.headers(options.headers)
				.send(options.qs)
				.end(function(response) {
					resolve(response.body);
				});
		} else if (method == "POST") {
			unirest.post(options.url)
				.headers(options.headers)
				.send(options.qs)
				.end(function(response) {
					resolve(response.body);
				});

		}
	});

}