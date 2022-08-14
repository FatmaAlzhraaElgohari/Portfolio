import { Component, OnInit } from '@angular/core';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { faFileContract} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faHouseChimney = faHouseChimney;
  faBookOpen =faBookOpen;
  faCircleUser =faCircleUser;
  faFileContract=faFileContract;
  constructor() { }

  ngOnInit(): void {
  }

}
