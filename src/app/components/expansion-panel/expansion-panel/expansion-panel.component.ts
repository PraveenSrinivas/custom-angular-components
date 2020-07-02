import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent implements OnInit {
  showPanelBody = false;
  constructor() {}

  ngOnInit(): void {}

  showExpansionPanelBody(expansionPanelBody: HTMLElement) {
    this.showPanelBody = !this.showPanelBody;
    expansionPanelBody.style.height =
      (this.showPanelBody ? expansionPanelBody.scrollHeight : 0) + 'px';
  }
}
