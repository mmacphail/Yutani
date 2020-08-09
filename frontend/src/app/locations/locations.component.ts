import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  @Input() locations: Location[]
  
  constructor() { }

  ngOnInit(): void { }

}
