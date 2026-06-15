import { Component, Input } from '@angular/core';
import { Albums } from '../../models/albums.model';

@Component({
  selector: 'app-albums-card',
  templateUrl: './albums-card.component.html',
  styleUrl: './albums-card.component.scss'
})
export class AlbumsCardComponent {

  @Input() albums!: Albums;

}