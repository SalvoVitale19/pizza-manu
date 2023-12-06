import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'menu-pizza-app';
  ngOnInit() {
    document.body.classList.add('bg-warning', 'bg-opacity-25');
  }
}
