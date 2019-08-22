import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SwitchboardService } from '../switchboard.service';

@Component({
  selector: 'employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: DataService;
  switchboard: SwitchboardService;

  constructor(dataService : DataService,
              switchboard : SwitchboardService) {
    this.data = dataService;
    this.switchboard = switchboard;
  }

  ngOnInit() {
  }

}
