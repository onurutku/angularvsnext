import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  photos: any = [];
  constructor(private readonly http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((photos: any) => {
        this.photos = photos;
      });
  }
}
