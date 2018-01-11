import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

public Supper;
  constructor(public navCtrl: NavController,  public navParams: NavParams, private storage:Storage) {
    this.Supper={
      Day:this.Day,
      Apettizer:this.Apettizer,
      Dessert:this.Dessert,
      Main_Dish:this.Main_Dish,
      Side_Dish:this.Side_Dish
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupperPage');
  }

  save(){
    this.storage.set("object",this.Supper).then((successSupper)=>{
      console.log("Supper Stored");
      console.log(successSupper);
    }).catch((error)=>{
      console.log(error);
    });

    this.Day='';
    this.Apettizer='';
    this.Dessert='';
    this.Main_Dish='';
    this.Side_Dish='';
  }

  go(){
    this.storage.get("Supper").then((Supper)=>{
      console.log(Supper);
    })
  }

}