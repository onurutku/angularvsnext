import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent {
  photos: any = [];
  constructor(private readonly http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((photos: any) => {
        this.photos = photos;
      });
  }
}
