import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css'],
})
export class WarningComponent {
  showWarning() {
    alert('hello You Have a warning');
  }
}
