import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mobileValida: boolean = true;
  mobileUntouched: boolean = true;
  onSubmit (value:any,valide: boolean) {
    console.log(valide);
    console.log(value);
  }
  onMobileInput (form: NgForm) {
    if (form) {
      this.mobileValida = form.form.get("mobile").valid;
      this.mobileUntouched = form.form.get("mobile").untouched;
    }

  }
}
