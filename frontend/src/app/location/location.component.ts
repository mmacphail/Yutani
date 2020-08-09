import { Component, OnInit, Input } from '@angular/core';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { Location } from '../location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  faPaperclip = faPaperclip;

  @Input() location: Location

  constructor() { }

  ngOnInit(): void {
  }

}
