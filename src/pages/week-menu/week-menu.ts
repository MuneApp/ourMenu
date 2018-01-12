import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WeekMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-week-menu',
  templateUrl: 'week-menu.html',
})
export class WeekMenuPage {
  menus:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
    this.allMenus();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeekMenuPage');
  }

  allMenus(){
    this.storage.ready().then(()=>{
      this.storage.forEach((value)=>{
        this.menus.push(value);
      });
    
    }).catch();
    console.log(this.menus);
  }
  

}
