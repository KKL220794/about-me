import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'about-me', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule) },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
    // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
];


@NgModule({
  declarations: [	
   ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
})
export class AppRoutingModule { }
