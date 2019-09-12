import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GstAddComponent} from './gst-add/gst-add.component';
import {GstEditComponent} from './gst-edit/gst-edit.component';
import {GstGetComponent} from './gst-get/gst-get.component';
import {ImgUploadComponent} from './img-upload/img-upload.component';

const routes: Routes = [
  {
    path:'business/create',
    component:GstAddComponent
  },
  {
    path:'business/edit/:id',
    component:GstEditComponent
  },
  {
    path:'business',
    component:GstGetComponent
  },
  {
    path:'business/img',
    component:ImgUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
