import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  mobileValida: Boolean = true;
  // tslint:disable-next-line:member-ordering
  mobileUntouched: Boolean = true;
  onSubmit (value: any, valide: boolean) {
    console.log(valide);
    console.log(value);
  }
  onMobileInput (form: NgForm) {
    if (form) {
      this.mobileValida = form.form.get('mobile').valid;
      this.mobileUntouched = form.form.get('mobile').untouched;
    }

  }
}
