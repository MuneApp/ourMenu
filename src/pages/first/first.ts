import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  tab1:any;
  tab2:any;
  tab3:any;


  constructor(public navCtrl: NavController, public navParams: NavParams)
  
{
  this.tab1="BreakfastPage";
  this.tab2="LunchPage";
  this.tab3="SupperPage";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

}
