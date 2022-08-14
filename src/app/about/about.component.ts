import { Component, OnInit } from '@angular/core';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faCloudArrowDown=faCloudArrowDown;
  constructor() { }

  ngOnInit(): void {
  }

}
