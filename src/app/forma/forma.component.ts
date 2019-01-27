import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormaService } from '../shared2/forma.service';
import { Forma } from '../shared2/forma.model';

declare var M: any;

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css'],
  providers: [FormaService]
})
export class FormaComponent implements OnInit {

  constructor(private formaService: FormaService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshFormaList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.formaService.selectedForma = {
      _id: "",
      name: "", 
      matricNo: null, 
      position: "",
      company: "", 
      address: "", 
      telephone: null 
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.formaService.postForma(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshFormaList();
        M.toast({ html: 'Submitted successfully', classes: 'rounded' });
      });
    }
    else {
      this.formaService.putForma(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshFormaList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshFormaList() {
    this.formaService.getFormaList().subscribe((res) => {
      this.formaService.formas = res as Forma[];
    });
  }

  onEdit(emp: Forma) {
    this.formaService.selectedForma = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.formaService.deleteForma(_id).subscribe((res) => {
        this.refreshFormaList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
