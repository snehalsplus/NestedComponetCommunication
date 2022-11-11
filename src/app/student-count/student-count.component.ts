import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.css']
})
export class StudentCountComponent  {

  @Input()
  all: number=0 ;

  @Input()
  male: number=0 ;

  @Input()
  female: number=0 ;

  selectedRadioButtonValue: string = 'All';

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> =
      new EventEmitter<string>();

      onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged
            .emit(this.selectedRadioButtonValue);
    }

}
