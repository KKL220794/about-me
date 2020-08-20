import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResumeComponent } from "./resume.component";

import { Routes, RouterModule } from "@angular/router";
import { SkillsComponent } from "./skills/skills.component";
import { LanguagesComponent } from "./languages/languages.component";
import { PersonalDetailsComponent } from "./personal-details/personal-details.component";
import { ProfileImageComponent } from "./profile-image/profile-image.component";
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [{ path: "", component: ResumeComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    ResumeComponent,
    SkillsComponent,
    LanguagesComponent,
    PersonalDetailsComponent,
    ProfileImageComponent,
    ExperienceComponent
  ],
})
export class ResumeModule {}
