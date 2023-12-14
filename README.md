## etherchain-node
Node JS api for the Ethereum blockchain

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



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/sgsshankar/etherchain-node/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

