import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { StudentEvaluateService } from '../../../shared4/student-evaluate.service';
import { StudentEvaluate } from '../../../shared4/student-evaluate.model';

declare var M: any;

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css'],
  providers: [StudentEvaluateService]
})
export class EvaluateComponent implements OnInit {

  constructor(private studentEvaluateService: StudentEvaluateService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshStudentEvaluateList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.studentEvaluateService.selectedStudentEvaluate = {
      _id: "",
      matricNo: null, 
      score: null,
      grade: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.studentEvaluateService.postStudentEvaluate(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshStudentEvaluateList();
        M.toast({ html: 'Submitted successfully', classes: 'rounded' });
      });
    }
    else {
      this.studentEvaluateService.putStudentEvaluate(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshStudentEvaluateList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshStudentEvaluateList() {
    this.studentEvaluateService.getStudentEvaluateList().subscribe((res) => {
      this.studentEvaluateService.studEva = res as StudentEvaluate[];
    });
  }

  onEdit(emp: StudentEvaluate) {
    this.studentEvaluateService.selectedStudentEvaluate = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.studentEvaluateService.deleteStudentEvaluate(_id).subscribe((res) => {
        this.refreshStudentEvaluateList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }


}
