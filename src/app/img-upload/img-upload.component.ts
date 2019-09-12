import { Component, OnInit } from '@angular/core';
import {FileUploader,FileSelectDirective} from 'ng2-file-upload/ng2-file-upload';
const URL='http://localhost:8080/api/upload'
@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.sass']
})
export class ImgUploadComponent implements OnInit {

  constructor() { }
  title = 'app';

  public uploader: FileUploader = new FileUploader({url:URL, itemAlias: 'photo'});

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
 }
  

}
