import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  // This property will keep track of the radio button which is selected
    // We have set the default value to All, so all the students
    // are displayed in the table by default
    selectedStudentCountRadioButton: string = 'All';
    dropdownvalue= "";
    SetDropDownValue(drpValue:any){
      this.dropdownvalue=drpValue.target.value;
    }

    students: any[];
    constructor() {
        this.students = [
            {
                ID: 'std101', FirstName: 'Santosh', LastName: 'Jena', Branch: 'CSE',
                DOB: '29/02/1988', Gender: 'Male'
            },
            {
                ID: 'std102', FirstName: 'Anurag', LastName: 'Mohanty', Branch: 'ETC',
                DOB: '23/05/1989', Gender: 'Male'
            },
            {
                ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
                DOB: '24/07/1992', Gender: 'Female'
            },
        ];
    }

 getStudents():void{
  this.students=[
  {
    ID: 'std101', FirstName: 'Pranaya', LastName: 'Rout',
    DOB: '12/8/1988', Gender: 'Male', CourseFee: 1234.56
},
{
    ID: 'std102', FirstName: 'Anurag', LastName: 'Mohanty',
    DOB: '10/14/1989', Gender: 'Male', CourseFee: 6666.00
},
{
    ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan',
    DOB: '7/24/1992', Gender: 'Female', CourseFee: 6543.15
},
{
    ID: 'std104', FirstName: 'Hina', LastName: 'Sharma',
    DOB: '8/19/1990', Gender: 'Female', CourseFee: 9000.50
},
{
    ID: 'std105', FirstName: 'Sambit', LastName: 'Satapathy',
    DOB: '4/12/1991', Gender: 'Male', CourseFee: 9876.54
},
{
  ID: 'std105', FirstName: 'Sambit', LastName: 'Satapathy',
  DOB: '4/12/1991', Gender: 'Male', CourseFee: 9876.54
}
]};

trackByStudentID(index: number, student: any): string {
  return student.ID;
}

getTotalStudentsCount(): number {
  return this.students.length;
}

getMaleStudentsCount(): number {
  return this.students.filter(std => std.Gender === 'Male').length;
}

getFemaleStudentsCount(): number {
  return this.students.filter(std => std.Gender === 'Female').length;
}

onStudentCountRadioButtonChange(selectedRadioButtonValue: string): void {
  this.selectedStudentCountRadioButton = selectedRadioButtonValue;
}
}
