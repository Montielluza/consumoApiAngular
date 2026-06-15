import { Component, Input } from '@angular/core';
import { Albums} from '../../models/albums.model';


@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.scss'
})
export class AlbumsListComponent {
  @Input() albums!: Albums[];
}
