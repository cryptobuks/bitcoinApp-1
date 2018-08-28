const bitcoin = require('bitcoinjs-lib')

function rng () { return Buffer.from('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') }

keyPairSet = [];
wifSet = [];
addressSet = [];
function createAddress(){
  const keyPair = bitcoin.ECPair.makeRandom({rng:rng})
  wifSet.push(keyPair.toWIF());
  keyPairSet.push(keyPair);
  addressSet.push(keyPair.getAddress())
  console.log(addressSet, addressSet.length );
}
createAddress()
createAddress()
createAddress()
createAddress()
createAddress()
createAddress()

// module.exports = keyPair
