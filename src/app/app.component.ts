import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularVSNext';
  photos: any = [];
  constructor(private readonly http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((photos: any) => {
        const slicedArray = photos.slice(0, 100);
        this.photos = slicedArray;
      });
  }
}
