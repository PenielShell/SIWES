import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SupervisorService } from '../shared3/supervisor.service';
import { Supervisor, MatNo} from '../shared3/supervisor.model';

declare var M: any;

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css'],
  providers: [SupervisorService]
})
export class SupervisorComponent implements OnInit {

  constructor(private supervisorService: SupervisorService) { }
  serverErrorMessages: string;
  ngOnInit() {
    this.resetForm();
    this.refreshSupervisorList();
    this.refreshMatNoList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.supervisorService.selectedSupervisor = {
      _id: "",
      title:"",
      name: "",
      studMatNo: null, 
      phoneNo: null, 
      comments: "",
      location: ""
     
    },
    this.supervisorService.selectedMatNo = {
      _id: "",
      studMatNo: null
     
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.supervisorService.postSupervisor(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSupervisorList();
        M.toast({ html: 'Submitted successfully', classes: 'rounded' });
      });
      this.supervisorService.postMatNo(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshMatNoList();
  
      });
    }
    else {
      this.supervisorService.putSupervisor(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSupervisorList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }


  refreshSupervisorList() {
    this.supervisorService.getSupervisorList().subscribe((res) => {
      this.supervisorService.supervisors = res as Supervisor[];
    });
  }
  refreshMatNoList() {
    this.supervisorService.getMatNoList().subscribe((res) => {
      this.supervisorService.supervised = res as MatNo[];
    });
  }

  onEdit(emp: Supervisor) {
    this.supervisorService.selectedSupervisor = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.supervisorService.deleteSupervisor(_id).subscribe((res) => {
        this.refreshSupervisorList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }


}
