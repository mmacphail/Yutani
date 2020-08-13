import { Component, OnInit } from '@angular/core';
import { Event } from '../entities';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[] = [];

  constructor() { }

  ngOnInit(): void {
    this.events = [
      {id: 'repairGranaries', title: 'Repair the granaries', progression: 4, goal: 16, cost: 2, reward: "+2 IP / hour"},
      {id: 'repairMainWall', title: 'Repair the main wall', progression: 8, goal: 16, cost: 2, reward: "+2 IP / hour"},
      {id: 'establishHQ', title: 'Establish a head-quarter', progression: 6, goal: 16, cost: 2, reward: "+2 IP / hour"},
    ];
  }

}
