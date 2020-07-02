import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  autoCompleteOptionsList = [
    { startsWith: true, options: ['One', 'Two', 'Three', 'Four'] },
    {
      startsWith: true,
      options: ['Angular', 'React.js', 'Vue.js', 'Ember.js'],
    },
    { startsWith: false, options: ['Apple', 'Banana', 'Chikkoo', 'Dates'] },
    { startsWith: false, options: ['Bengaluru', 'Delhi', 'Chennai'] },
  ];
}
