import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-age-successful-calculator',
  templateUrl: './age-successful-calculator.component.html',
  styleUrls: ['./age-successful-calculator.component.css']
})
export class AgeSuccessfulCalculatorComponent implements OnInit {
  public ageSuccessFulCalculatorForm: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.intializeEligibilityForm();
  }

  intializeEligibilityForm() {
    this.ageSuccessFulCalculatorForm = this.fb.group({
      chosen_airforce: ['pilot', [Validators.required]],
      name: ['', [Validators.required]],
      dob: ['', Validators.required],
      age: [''],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      gender: ['0', Validators.required],
      height: ['', Validators.required],
      eligible: [''],
      remarks: ['']

    })
  }
}
