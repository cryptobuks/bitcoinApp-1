import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {crypto, address, ECPair, ECSignature, HDNode, Transaction} from 'bitcoinjs-lib';
import { KeyPair } from '../../controllers/bitcoin'

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
  function createAddress(){

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');

  }

}
