import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-care-taker',
  templateUrl: './care-taker.component.html',
  styleUrls: ['./care-taker.component.css']
})
export class CareTakerComponent implements OnInit {

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
