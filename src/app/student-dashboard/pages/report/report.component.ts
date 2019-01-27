import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from '../report/file.service';
import {saveAs} from 'file-saver';


const uri = 'http://localhost:4200/file/upload';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers:[FileService]
})
export class ReportComponent  {

  uploader:FileUploader = new FileUploader({url:uri});

    attachmentList:any = [];

    constructor(private _fileService:FileService){

        this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
            this.attachmentList.push(JSON.parse(response));
        }
    }

    download(index){
        var filename = this.attachmentList[index].uploadname;

        this._fileService.downloadFile(filename)
        .subscribe(
            data => saveAs(data, filename),
            error => console.error(error)
        );
    }
}
