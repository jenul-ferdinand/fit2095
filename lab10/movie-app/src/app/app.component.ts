import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'movie-app';

  constructor (
    private router: Router
  ) {}
}

