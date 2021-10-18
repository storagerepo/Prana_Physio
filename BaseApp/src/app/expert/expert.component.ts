import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  routerForExpert(){
    this.router.navigateByUrl("/expert");
  }
  routerForPatient(){
    this.router.navigateByUrl("/home");
  }
  routerForCareTaker(){
    this.router.navigateByUrl("/care-taker");
  }
}
