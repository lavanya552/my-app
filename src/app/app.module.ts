import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BusinessService } from './business.service';
import { HttpClientModule } from '@angular/common/http';
import { ImgUploadComponent } from './img-upload/img-upload.component'; 
import { FileSelectDirective } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    GstGetComponent,
    GstEditComponent,
    ImgUploadComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
