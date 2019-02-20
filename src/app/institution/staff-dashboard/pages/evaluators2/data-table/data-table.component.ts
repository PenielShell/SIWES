import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UserService } from '../services/user.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../models/user.model';
import { DataTableDataSource } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['id', 'matric No','Email'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.dataSource = new DataTableDataSource(this.paginator, this.sort);
  }
}
export class UserDataSource extends DataSource<any> {

  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.userService.getUser();
  }

  disconnect() {}
}

