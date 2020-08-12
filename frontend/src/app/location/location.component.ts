import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../entities';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input() location: Location;

  constructor() { }

  ngOnInit(): void {
  }

  costTooltip() {
    return `The cost to travel here is ${this.location.cost} AP.`
  }

  travelTooltip() {
    return `Travelling to this location will cost you ${this.location.cost} action points. You can only travel once a day.`
  }
}
