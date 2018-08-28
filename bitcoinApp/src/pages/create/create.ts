import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {crypto, address, ECPair, ECSignature, HDNode, Transaction} from 'bitcoinjs-lib';
import { BigInteger } from ('bigi');

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  function rng() {
      return new Buffer('12345678901234567890123456789012');
  };

  // Generate a random bitcoin address
  const keyPair1 = bitcoin.ECPair.makeRandom({rng});
  const address = keyPair1.getAddress();
  keyPair1.toWIF();



  addressList = ['16y2FUJWuqP1ooG29uExjwfeYRogYmHeJ4'];
   function createAddress(){
    let keypair = ECPair.makeRandom()
    addressList.push(keypair)
    return addressList
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');

  }

}
