import { Component, OnInit } from '@angular/core';
declare var jQuery: any;


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  isCollapsibleOpened;

  constructor() { }

  ngOnInit() {
    this.isCollapsibleOpened = false;
  }

  ngAfterViewInit() {
    jQuery('.collapsible').collapsible() ;
  }

}
