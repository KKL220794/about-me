import { Component, OnInit } from '@angular/core';
import { Skills, SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillSet: Skills[];
  isLoading = false;

  constructor(private _skillsService: SkillsService) { }

  ngOnInit() {
    this.isLoading = true;
    this._skillsService.getSkillSet().subscribe(data => {
      this.skillSet = data; 
      this.isLoading = false; }
      );
  }

}
