import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player-banner',
  templateUrl: './player-banner.component.html',
  styleUrls: ['./player-banner.component.css']
})
export class PlayerBannerComponent implements OnInit {
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
