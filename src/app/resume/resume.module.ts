import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [ 
  {path: '', component: ResumeComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResumeComponent]
})
export class ResumeModule { }
