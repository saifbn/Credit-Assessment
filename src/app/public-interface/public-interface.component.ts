import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Credit} from 'src/app/_models'
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-public-interface',
  templateUrl: './public-interface.component.html',
  styleUrls: ['./public-interface.component.css']
})
export class PublicInterfaceComponent  {
  form: FormGroup;
    
  firstName = new FormControl("", Validators.required);
  lastName = new FormControl("", Validators.required);
  cin=new FormControl("", Validators.required);
  email=new FormControl("", Validators.required);
  situation=new FormControl("", Validators.required);
  kids=new FormControl("", Validators.required);
  birthday=new FormControl("", Validators.required);
  oldCredit=new FormControl("", Validators.required);
  annuity=new FormControl("", Validators.required);
  creditAmount=new FormControl("", Validators.required);
  creditPeriod=new FormControl("", Validators.required);
  
  constructor(fb: FormBuilder) {
      this.form = fb.group({
          "firstName": this.firstName,
          "lastName": this.lastName,
          "cin": this.cin,
          "email": this.email,
          "situation": this.situation,
          "kids": this.kids,
          "birthday": this.birthday,
          "oldCredit": this.oldCredit,
          "annuity": this.annuity,
          "creditAmount": this.creditAmount,
          "creditPeriod": this.creditPeriod
      });
  }
  onSubmitModelBased() {
      console.log("model-based form submitted");
      console.log(this.form);
      console.warn(this.form.value);

  }
}
