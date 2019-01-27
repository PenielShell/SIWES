import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogbookService } from '../services/logbook.service';
import { Ilogbook } from '../interfaces/ilogbook';


@Component({
  selector: 'create-logbook',
  templateUrl: './create-logbook.component.html',
  styles: []
})
export class CreateLogbookComponent implements OnInit {
  logbookForm: FormGroup;
  loader: boolean;

 constructor(private _fb: FormBuilder, private _logbookService: LogbookService) { }

 ngOnInit() {
   this._createForm();
 }

 /**
  * create our reactive form here
  */
 private _createForm() {
   this.logbookForm = this._fb.group({
     workdone: ['', Validators.required],
     term: ['word', Validators.required],
     meaning: ['', Validators.required]
   });
 }

 /**
  * submit new employee to server
  */
 onSubmit() {
   const param = this.logbookForm.value;
   this._logbookService.create(param)
     .subscribe((logbook: Ilogbook) => {
        this.loader = false;
        this.logbookForm.reset({logbook: 'today'});
     },
       (error) => {
         console.error(error);
         this.loader = false;
       });
 }


}
