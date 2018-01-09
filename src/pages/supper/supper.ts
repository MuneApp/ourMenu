import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

/**
 * Generated class for the SupperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supper',
  templateUrl: 'supper.html',
})
export class SupperPage {

Day:string;
Apettizer:string;
Dessert:string;
Main_Dish:string;
Side_Dish:string;
food:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupperPage');
  }

  save(){
    let Main_Dish={
      Food:this.food,
    }
    let numberOfDay =this.magicNumbers();
    this.storage.set('DayName'+numberOfDay,Main_Dish).then(()=>{
      alert("Datasaved");
    }).catch((error)=>{
      console.log(error);
    });
    this.food='';
  }

  magicNumbers(){
    return Math.floor(Math.random()*1);
  }

  go(){
    this.navCtrl.push("SupperPage");
  }

}
