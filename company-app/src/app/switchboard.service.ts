import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from './employee';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})

export class SwitchboardService {
  private departmentWatcher = new Subject<Department>();
  public department$ = this.departmentWatcher.asObservable();

  public switchDepartment(department: Department) {
    if (department) {
      this.departmentWatcher.next(department);
    }
  }
  constructor() { }
}
