import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const options = {
      strings: ["My Name is Krishna Kanhaiya", "I'm a Web Developer", "You just think, I'll make it real"],
      typeSpeed: 100,
      backDelay: 900,
      loop : true,
    };
     
    var typed = new Typed('.typed', options);
    
  }

}
