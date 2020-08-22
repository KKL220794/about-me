import { Component, OnInit } from '@angular/core';
import { Experience, ExperienceService } from './experience.service';
declare var jQuery: any;


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  isLoading = false;
  experienceList: Experience[];

  constructor(private _experienceService: ExperienceService) { }

  ngOnInit() {
this.isLoading = true;
    this._experienceService.getExperience().subscribe(data => {
      this.experienceList = data;
      this.isLoading = false
    }
      );
  }

  ngAfterViewInit() {
    jQuery('.collapsible').collapsible() ;
    jQuery('.collapsible').open(2) ;
  }

  onCall(e) {
    console.log(e);
    
  }

}
