import { Component, OnInit, Input } from '@angular/core';
import { faCode, faInbox, faStar, faEnvelopeOpen, faFolderOpen, faChevronDown, faRecycle, faExclamationCircle, faTrash, faFolder, faTag, faChevronLeft, faChevronRight, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { Location } from '../location';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  faInbox = faInbox;
  faTag = faTag;
  faFolder = faFolder;
  faTrash = faTrash;
  faExclamationCircle = faExclamationCircle;

  @Input() location: Location;

  constructor() { }

  ngOnInit(): void {
  }

}
