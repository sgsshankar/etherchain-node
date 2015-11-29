# etherchain-node
Node JS api for the Etherium blockchain

### Installation

```
npm install etherchain
```

### Instance

```
var etherchain = require('etherchain');
```
### Usage

```
etherchain.method(<args>).then(function(response) {
		//Results here
	});
```

### Methods
Refer to the [Etherchain API](https://etherchain.org/apidoc) to know about each output and explanation
```
getBasicStats()
getBlocks(offset, count)
getBlock(id)
getBlockTransaction(id)
getTransaction(id)
getAccount(id)
getAccountTransaction(id, offset)
```

### Development

Feel free to fork from [etherchain-node](https://github.com/sgsshankar/etherchain-node)

### Issues

https://github.com/sgsshankar/etherchain-node/issues

