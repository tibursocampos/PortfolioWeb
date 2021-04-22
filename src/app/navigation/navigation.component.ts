import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  nome :string = "Raphael Campos";

  constructor() { }

  ngOnInit(): void {
  }
  
  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }
  
  toWorks(){
    document.getElementById("works")?.scrollIntoView({behavior:"smooth"});
  }
  
  toEducation(){
    document.getElementById("education")?.scrollIntoView({behavior:"smooth"});
  }
  
  toSkills(){
    document.getElementById("skills")?.scrollIntoView({behavior:"smooth"});
  }
  
  toAwards(){
    document.getElementById("awards")?.scrollIntoView({behavior:"smooth"});
  }

}
