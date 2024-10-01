import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-actor',
  standalone: true,
  imports: [],
  template: `
    <div class="section">
      <table class="table table-striped">
        <tr>
          <th>Name</th>
          <th>Birth Year</th>
          <th>Delete?</th>
        </tr>
        @for (actor of actors; track $index) {
          <tr>
            <td>{{actor.name}}</td>
            <td>{{actor.bYear}}</td>
            <td><button type="submit" class="btn btn-primary" (click)="onDeleteActor(actor)">Delete</button></td>
          </tr>
        }
      </table>
    </div>
  `,
  styleUrl: './delete-actor.component.sass'
})
export class DeleteActorComponent implements OnInit {
  actors : any[] = []

  constructor (
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.onGetActors();
  }

  onGetActors () {
    return this.apiService.getActors().subscribe(
      (data: any) => {
        this.actors = data;
      }
    );
  } 

  onDeleteActor (item: any) {
    this.apiService.deleteActor(item._id).subscribe(result => {
      this.onGetActors();
      this.router.navigate(['/list-actors']);
    });
  }


}
