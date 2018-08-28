import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { bitcoin } from 'bitcoinjs-lib'
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

  addressList = ['16y2FUJWuqP1ooG29uExjwfeYRogYmHeJ4'];
   createAddress(addressList){
    let keypair = bitcoin.ECPair.makeRandom()
    addressList.push(keypair)
    return addressList
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

}
