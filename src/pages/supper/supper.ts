import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

<<<<<<< HEAD
Day:string;
Apettizer:string;
Dessert:string;
Main_Dish:string;
Side_Dish:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
=======
  Day:string;
  Appetizer:string;
  Dessert:string;
  Main_Dish:string;
  Side_Dish:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
>>>>>>> origin/bobby
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupperPage');
  }

    getMenu(){
      let menu={
        Day:this.Day,
        Appetizer:this.Appetizer,
        Dessert:this.Dessert,
        Main_Dish:this.Main_Dish,
        Side_Dish:this.Side_Dish,
      }

      let id =this.magicNumbers();
      this.storage.set('Day'+id, menu).then(()=>{
        alert("Supper saved");
      }).catch((error)=>{
        console.log(error);
      });
      this.Day='';
      this.Appetizer='';
      this.Dessert='';
      this.Main_Dish='';
      this.Side_Dish='';
    }

    magicNumbers(){
      return Math.floor(Math.random()*9999);
    }

    showMenu(){
      this.navCtrl.push("WeekMenuPage");
    }

}
