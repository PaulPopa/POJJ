import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEmployeeComponent } from './department-employee.component';

describe('DepartmentEmployeeComponent', () => {
  let component: DepartmentEmployeeComponent;
  let fixture: ComponentFixture<DepartmentEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
