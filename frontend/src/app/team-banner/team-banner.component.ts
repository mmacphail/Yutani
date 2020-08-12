import { Component, OnInit } from '@angular/core';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
  
@Component({
  selector: 'app-team-banner',
  templateUrl: './team-banner.component.html',
  styleUrls: ['./team-banner.component.css']
})
export class TeamBannerComponent implements OnInit {

  faUserFriends = faUserFriends;

  constructor() { }

  ngOnInit(): void {
  }

}
