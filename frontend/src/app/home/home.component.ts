import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { faCode, faInbox, faStar, faEnvelopeOpen, faFolderOpen, faChevronDown, faRecycle, faExclamationCircle, faTrash, faFolder, faTag, faChevronLeft, faChevronRight, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
import { GameService } from '../game.service';
import { Player } from '../player';
import { Location } from '../location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faCode = faCode;
  faInbox = faInbox;
  faStar = faStar;
  faEnvelopeOpen = faEnvelopeOpen;
  faFolderOpen = faFolderOpen;
  faChevronDown = faChevronDown;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faRefresh = faRecycle;
  faExclamationCircle = faExclamationCircle;
  faTrash = faTrash;
  faFolder = faFolder;
  faTag = faTag;
  faPaperclip = faPaperclip;
  
  locations$: Observable<Location[]>;
  currentPlayer$: Observable<Player>;
  currentLocation$: Observable<Location>;
  
  constructor(public authService: AuthService, private gameService: GameService) { }

  ngOnInit(): void {
    /*this.locations$ = this.gameService.getLocations$();
    this.currentPlayer$ = this.gameService.getCurrentPlayer$();
    this.currentLocation$ = this.locations$.pipe(
      map(locations => locations[0])
    );*/

    /*
    this.currentPlayer$.pipe(
      switchMap((player) => this.locations$.pipe(map((locations) => locations.find((loc) => loc.id == player.id))))
    );
    */
  }

}
