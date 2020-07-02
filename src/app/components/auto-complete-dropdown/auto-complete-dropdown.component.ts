import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-auto-complete-dropdown',
  templateUrl: './auto-complete-dropdown.component.html',
  styleUrls: ['./auto-complete-dropdown.component.scss'],
})
export class AutoCompleteDropdownComponent implements OnInit {
  @Input() autoCompleteOptions: Array<any>;
  @Input() startsWith: boolean;
  showDropdown = false;
  filteredOptions = [];
  autoCompleteSearchBoxValue = '';

  @HostListener('document:click', ['$event'])
  clickout(event) {
    event.stopPropagation();
    event.preventDefault();
    if (this.elementRef.nativeElement.contains(event.target)) {
      this.showDropdown = event.target.tagName === 'INPUT';
    } else {
      this.showDropdown = false;
    }
  }

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.filteredOptions = this.autoCompleteOptions.slice();
  }

  filterAutoCompleteOptions(event, searchText) {
    this.filteredOptions = this.autoCompleteOptions.filter((option) =>
      this.startsWith
        ? option.toUpperCase().startsWith(searchText.toUpperCase())
        : option.toUpperCase().includes(searchText.toUpperCase())
    );
  }
}
