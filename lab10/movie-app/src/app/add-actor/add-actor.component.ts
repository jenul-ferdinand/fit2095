import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-actor',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="section">
      <div class="form-group">
        <label for="actorName">Full Name</label>
        <input type="text" class="form-control" id="actorName" [(ngModel)]="fullName">
      </div>
      <div class="form-group">
        <label for="actorName">Birth Year</label>
        <input type="number" class="form-control" id="actorName" [(ngModel)]="bYear">
      </div>
      <button type="submit" class="btn btn-primary" (click)="onSaveActor()">Save Actor</button>
    </div>
  `,
  styleUrl: './add-actor.component.sass'
})
export class AddActorComponent {
  fullName : string = '';
  bYear : number = 0;
  actorId : string = '';

  constructor (
    private apiService: ApiService,
    private router: Router
  ) {}

  onSaveActor() {
    let obj = { name: this.fullName, bYear: this.bYear };
    this.apiService.createActor(obj).subscribe(
      (result) => {
        this.router.navigate(['/list-actors']);
      }
    );
  }
}
