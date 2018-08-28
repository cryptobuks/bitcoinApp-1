var bitcoin = require('../../bitcoinjs-lib')

function rng () { return Buffer.from('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') }

keyPairSet = [];
wifSet = [];
addressSet = [];
let number = 5
function createAddress(number, rng){
  for(let i = 0; i < number; i++){
    let keyPair = bitcoin.ECPair.makeRandom()
    wifSet.push(keyPair.toWIF());
    keyPairSet.push(keyPair);
    addressSet.push(keyPair.getAddress())
  }
  // console.log(keyPairSet);
  console.log(wifSet);
  console.log(addressSet);
}

createAddress(number)
