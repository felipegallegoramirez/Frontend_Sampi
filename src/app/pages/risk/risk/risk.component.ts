import { Component } from '@angular/core';


@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrl: './risk.component.css'
})
export class RiskComponent {
  form:boolean=false;
  hidden(){
    this.form = !this.form
  }

}
