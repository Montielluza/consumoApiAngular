import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsCardComponent } from './components/albums-card/albums-card.component';
import { AlbumsListComponent } from './pages/albums-list/albums-list.component';



@NgModule({
  declarations: [
    AlbumsCardComponent,
    AlbumsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlbumsModule { }
