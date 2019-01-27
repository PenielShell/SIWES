import {OnInit, Component} from "@angular/core";
import { Router } from "@angular/router";

import { FormaService } from '../../../shared2/forma.service';
import { StudentService } from './../../../shared/student.service';


@Component({
    selector: 'home1',
    templateUrl: './home1.component.html'
})
export class Home1Component implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        
    }

    // formA(){
    //     this.router.navigateByUrl('forma');
    //   }

      formB(){
        this.router.navigateByUrl('forma');
      }
}