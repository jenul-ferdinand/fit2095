import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CalcAgePipe } from "../calc-age.pipe";

@Component({
  selector: 'app-list-actors',
  standalone: true,
  imports: [CalcAgePipe],
  template: `
    <div class="section">
      <table class="table table-striped">
        <tr>
          <th>Name</th>
          <th>Birth Year</th>
          <th>Age</th>
        </tr>
        @for (actor of actors; track $index) {
          <tr>
            <td>{{actor.name}}</td>
            <td>{{actor.bYear}}</td>
            <td>{{actor.bYear | calcAge}}</td>
          </tr>
        }
      </table>
    </div>
  `,
  styleUrl: './list-actors.component.sass'
})
export class ListActorsComponent implements OnInit {
  actors : any[] = [];

  constructor (
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getActors().subscribe(
      (actors: any) => {
        this.actors = actors;
      }
    )
  }
}
