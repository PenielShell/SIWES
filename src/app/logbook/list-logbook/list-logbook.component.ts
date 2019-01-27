import { Component, OnInit } from '@angular/core';
import { LogbookService } from '../services/logbook.service';
import { Ilogbook } from '../interfaces/ilogbook';
import { NgAlertService, MessageType } from '@theo4u/ng-alert';


@Component({
  selector: 'list-logbook',
  templateUrl: './list-logbook.component.html',
  styles: []
})
export class ListLogbookComponent implements OnInit {

  logbooks: Ilogbook[] = [];
  loading = true;

  constructor(private _logbookService: LogbookService, private _ngAlert: NgAlertService) { }

  ngOnInit() {
    this.loading = true;
    this._logbookService.list()
      .subscribe(logbooks => {
        this.loading = false;
        this.logbooks = logbooks;
      });

    // subscribe to pusher's event
    this._logbookService.getChannel().bind('new', data => {
      data.new = true;
      this.logbooks.push(data);
    });

    this._logbookService.getChannel().bind('deleted', data => {
      this.logbooks = this.logbooks.filter(emp => emp.id !== data.id);
    });
  }

  delete(logbook: Ilogbook) {
   // show delete confirmation with ngAlert
    this._ngAlert.push({
      message: `<strong>Are you sure!</strong> you want to delele this logbook with name <strong>${logbook.workdone}</strong>`,
      type: MessageType.warning,
      buttons: [
        {
          label: 'Continue',
          action: () => {
            this._actualDelete(logbook);
          },
          css: 'btn btn-danger'
        }
      ]
    });
  }

  private _actualDelete (logbook: Ilogbook) {
    this._logbookService.delete(logbook)
      .subscribe(() => {
        // remove the logbook if removed successfully
        this.logbooks = this.logbooks.filter(item => item !== logbook);
        this._ngAlert.push({
          message: `${logbook.workdone} removed`,
          type: MessageType.success
        });
      });
  }


}
