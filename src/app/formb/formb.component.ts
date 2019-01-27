import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormbService } from '../shared3/formb.service';
import { Formb } from '../shared3/formb.model';

declare var M: any;

@Component({
  selector: 'app-formb',
  templateUrl: './formb.component.html',
  styleUrls: ['./formb.component.css'],
  providers: [FormbService]
})
export class FormbComponent implements OnInit {

  constructor(private formbService: FormbService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshFormbList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.formbService.selectedFormb = {
      _id: "",
      name: "", 
      matricNo: null,
      department:"",
      company:"",
      address:"",
      allowances: null,
      workdone: "", 
      weeks: null 

      
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.formbService.postFormb(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshFormbList();
        M.toast({ html: 'Submitted successfully', classes: 'rounded' });
      });
    }
    else {
      this.formbService.putFormb(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshFormbList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshFormbList() {
    this.formbService.getFormbList().subscribe((res) => {
      this.formbService.formbs = res as Formb[];
    });
  }

  onEdit(emp: Formb) {
    this.formbService.selectedFormb = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.formbService.deleteFormb(_id).subscribe((res) => {
        this.refreshFormbList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
