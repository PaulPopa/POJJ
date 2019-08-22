import { Pipe, PipeTransform } from '@angular/core';
import { Department } from './department'

@Pipe({
  name: 'departmentFilter'
})
export class DepartmentFilterPipe implements PipeTransform {

  transform(departments: Department[], filterText: string): Department[] {
    if(!departments) return [];
    if(!filterText) return departments;

    return departments.filter(dep => {
        return dep.dep_name.toLowerCase().includes(filterText.toLowerCase());
    });
  }

}
