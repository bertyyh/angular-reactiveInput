import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formModel:FormGroup = new FormGroup({
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    emails: new FormArray([
      new FormControl('aa@aa.com'),
      new FormControl('bb@bb.com')
    ])
  });
  // from: new FormControl('qq'),
  //   to: new FormControl('qvvq'),
  constructor() { }

  ngOnInit() {
  }
  onSubmit () {
    console.log(this.formModel.value);
  }
  addEmail () {
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }

  getEmailArr () {
    console.log(this.formModel.get('emails')['controls']);
    return this.formModel.get('emails')
  }
}
