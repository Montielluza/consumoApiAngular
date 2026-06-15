import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsCardComponent } from './components/albums-card/albums-card.component';
import { AlbumsListComponent } from './pages/albums-list/albums-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AlbumsCardComponent, AlbumsListComponent],
  imports: [CommonModule, HttpClientModule],
  exports:[AlbumsListComponent],
})
export class AlbumsModule {}
