import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { Router } from "@angular/router";
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  studentDetails;
  constructor(private studentService: StudentService, private router: Router) { }
  loginInfo:Student = {
    matricNo: null,
    email: '',
    password: ''

    
};
  ngOnInit() {
    this.studentService.getStudentDashboard().subscribe(
      res => {
        this.studentDetails = res['student'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
    this.studentService.deleteToken();
    this.router.navigate(['/login']);
  }

}

