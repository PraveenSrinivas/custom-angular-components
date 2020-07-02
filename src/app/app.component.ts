import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  autoCompleteOptionsList = [
    ['One', 'Two', 'Three', 'Four'],
    ['Apple', 'Banana', 'Chikkoo', 'Dates'],
    ['Bengaluru', 'Delhi', 'Chennai'],
  ];
}
