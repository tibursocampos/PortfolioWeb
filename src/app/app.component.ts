import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioWeb';
  
  ChangeState(divId :string) {
    //document.getElementById(divId).style.display = "none";
    console.log(divId);
  }  
}
