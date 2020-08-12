import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../entities';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: Location[];

  constructor() { }

  ngOnInit(): void { 
    this.locations = [
      {
        id: "port",
        name: "Port",
        rumors: "The old port comes back to life after having been neglected for 10 years. The harbor master's office serves as your headquarters. Here at least you are safe.",
        cost: 2,
        currentLocation: true,
        canTravelHere: false
      },
      {
        id: "mines",
        name: "Mines",
        rumors: "The old mines were suddenly left behind. It's up to you to take back control of the ore production if you want to upgrade your arsenal.",
        cost: 2,
        currentLocation: false,
        canTravelHere: true
      },
      {
        id: "arena",
        name: "Arena",
        rumors: "This huge arena is not abandoned. You heard talks of slavers enjoying themselves with to-the-death slaves battle. Maybe you can help yourself by helping them defeat their masters.",
        cost: 2,
        currentLocation: false,
        canTravelHere: true
      },
      {
        id: "caves",
        name: "Caves",
        rumors: "The region is dominated by a mountain. Locals told you that it was full of caves. Who know what you might find in these caves?",
        cost: 2,
        currentLocation: false,
        canTravelHere: false
      }
    ];
  }

}
