import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMessage, MessageType, CloseType, NgAlertService } from '@theo4u/ng-alert';
import { Subscription } from 'rxjs/Subscription';
import {trigger, state,style,transition,animate,keyframes} from '@angular/animations';
import * as $ from 'jquery';

declare var $: any;

@Component({
    selector: 'app-others1',
    templateUrl: './others1.component.html',
    animations:[
      //Defiing animation here
      trigger('myfirstanimation',[
        state('small',style({height: '0px'})),
        state('large',style({height: '1000px'})),

        transition('small <=> large',animate('400ms ease-in'))
      ])
    ]
})

export class OthersComponent1 implements OnInit, OnDestroy {
  
    message: IMessage;
  closeTypes = CloseType;
  private _alertSub: Subscription;

  constructor(private _ngAlert: NgAlertService) {
  }

  ngOnInit () {
     this._alertSub = this._ngAlert.getSource().subscribe(message => {
      this.message = message;
    });

    $("body").on( "click", ".button-container button", function(){
      alert( "Triggred by " + $(this).text() ); 
    }); 
    
    //Adds new button to DOM
var i = 2;
    $(".addtodom").click( function(e){
      $(".button-container").append( "<button>Month "+ i +"</button>" );
      i++;
    });
  
  }
  
  ngOnDestroy () {
    this._alertSub.unsubscribe();
  }

  
state: string ='large';

animateMe(){
  this.state = (this.state === 'large' ? 'large' : 'large');
}

}
