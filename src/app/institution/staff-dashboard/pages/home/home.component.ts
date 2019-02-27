import {OnInit, Component,HostBinding,Input} from "@angular/core";
import { EvaluateService } from './../../../shared4/evaluate.service';
import { Evaluate } from './../../../shared4/evaluate.model';
import 'rxjs/add/observable/of';
import { NgForm } from '@angular/forms';


declare var M: any;
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [EvaluateService]
})
export class HomeComponent implements OnInit {
    constructor(private evaluateService: EvaluateService) { }

    ngOnInit() {
      this.resetForm();
      this.refreshEvaluateList();
    }
  
    resetForm(form?: NgForm) {
      if (form)
        form.reset();
      this.evaluateService.selectedEvaluate = {
        _id: null,
        matricNo: null, 
        dressing: null, 
        presentation: null, 
        audibility: null, 
        composition: null, 
        workdone: null 
       
      }
    }
  
    onSubmit(form: NgForm) {
      if (form.value._id == "") {
        this.evaluateService.postEvaluate(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshEvaluateList();
          M.toast({ html: 'Submitted successfully', classes: 'rounded' });
        });
      }
      else {
        this.evaluateService.putEvaluate(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshEvaluateList();
          M.toast({ html: 'Updated successfully', classes: 'rounded' });
        });
      }
    }
  
    refreshEvaluateList() {
      this.evaluateService.getEvaluateList().subscribe((res) => {
        this.evaluateService.Eva = res as Evaluate[];
      });
    }
  
    onEdit(emp: Evaluate) {
      this.evaluateService.selectedEvaluate = emp;
    }
  
    onDelete(_id: string, form: NgForm) {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.evaluateService.deleteEvaluate(_id).subscribe((res) => {
          this.refreshEvaluateList();
          this.resetForm(form);
          M.toast({ html: 'Deleted successfully', classes: 'rounded' });
        });
      }
    }
  
  
   
}
