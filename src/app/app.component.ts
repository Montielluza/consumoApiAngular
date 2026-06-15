import { Component, OnInit } from '@angular/core';
import { Albums } from './features/albums/models/albums.model';
import { AlbumsService } from './features/albums/services/Albums.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'consumoApiAngular';

  albums: Albums[] = [];

  isLoading = true;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {

    this.albumsService.getAlbums().subscribe({
    next: (data) => {

    setTimeout(() => {
      this.albums = data;
      this.isLoading = false;
    }, 2000);

  },
  error: () => {
    this.isLoading = false;
  }
});

  }

}