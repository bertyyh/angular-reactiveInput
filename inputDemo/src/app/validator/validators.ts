import { FormControl, FormGroup} from '@angular/forms';
import { Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';
/**
 *
 * @param control 手机号码校验
 */
export function mobileValidator(control: FormControl): any {
  const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const vaild = myreg.test(control.value);
  console.log('mobile的校验结果是' + vaild);
  return vaild ? null : { mobile: true };
}
/**
 *
 * @param control 手机号码异步校验
 */
export function mobileAsyncValidator(control: FormControl): any {
  const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const vaild = myreg.test(control.value);
  console.log('mobile的校验结果是' + vaild);
  return of(vaild ? null : { mobile: true }).pipe(delay(5000));
}
/**
 *
 * @param group 密码校验
 */
export function equalValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const pconfirm: FormControl = group.get('pconfirm') as FormControl;
  let vaild: Boolean = false;
  if (password && pconfirm) {
    vaild = (password.value === pconfirm.value);
  }
  // console.log("密码校验结果" + vaild);
  return vaild ? null : { equal: { descx: '密码和确认密码不匹配'}};
}
