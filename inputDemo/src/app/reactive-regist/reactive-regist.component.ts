import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { mobileValidator, equalValidator } from '../validator/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  private hobbyList: Array<string> = ['篮球', '足球', '羽毛球'];
  private selectHobby: Array<string> = [];

  formMoudel: FormGroup;
  constructor(fb: FormBuilder) {
    this.formMoudel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator],
      sex: ['男'],
      passwordsGroup: fb.group({
        password: ['', [Validators.minLength(6)]],
        pconfirm: ['']
      }, { validator: equalValidator})
    });
   }

  onSubmit () {
    this.formMoudel.value['checked'] = this.selectHobby;
    if (this.formMoudel.valid) {
      console.log(this.formMoudel.value);
    }
  }
  selectCheckbox (check: boolean, value: string) {
    const index: number = this.selectHobby.indexOf(value);
    if (check) {
      if (index < 0) {
        this.selectHobby.push(value);
      }
    } else {
      if (index > -1) {
        this.selectHobby = this.selectHobby.filter((ele) => {
          return ele !== value;
        });
      }
    }
    console.log(this.selectHobby);
  }
  ngOnInit() {
  }


}
