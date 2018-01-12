import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupperPage } from './Supper';

@NgModule({
  declarations: [
    SupperPage,
  ],
  imports: [
    IonicPageModule.forChild(SupperPage),
  ],
})
export class SupperPageModule {}
