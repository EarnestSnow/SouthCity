
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


//region 校验昵称
export const nickValidator = (control: FormControl): any => {
    let reg = /^[\u4e00-\u9fa5\w]{4,20}$/
    let valid = reg.test(control.value)
    console.log("nick的校验结果是"+valid);
    return valid ? null : {nick: true}
}
//endregion

//region 校验用户名
export const userNameValidator = (control: FormControl) : any => {
    let reg = /^([\u4e00-\u9fa5]{2,10}|[a-zA-Z]{2,20})$/g
    let valid = reg.test(control.value)
    console.log("username的校验结果是"+valid)
    return valid ? null : {username: true}
}
//endregion


//region 校验邮箱

export const emailValidator = (control: FormControl): any => {
    let reg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    let valid = reg.test(control.value)
    console.log('email的校验结果' + valid)

    return valid ? null : {email: true}
}



export const mobileValidator = (control: FormControl): any => {
    let myreg = /^[1-9]+[0-9]{4}$/;
    let valid = myreg.test(control.value);
    console.log("mobile的校验结果是"+valid);
    return  valid ? null : {mobile: true}
    // 返回null， 校验通过， 校验没通过返回对象  ，语法规定，返回错误对象
}


//region  密码和确认密码
export const equalValidator = (group: FormGroup): any => {  // 注意这里和formControl校验器添加的方式不一样。
    let password: FormControl = group.get('password') as FormControl;
    let pconfirm: FormControl = group.get('pconfirm') as FormControl;
    let valid: boolean = (password.value === pconfirm.value);
    console.log('密码校验结果：' + valid);
    return valid ? null : {equal: {desc: '密码和确认密码不匹配'}};
}
//endregion

//region 密码校验
export const passwordValidator = (control: FormControl): any => {
    let reg = /^\w{6,16}$/
    let valid = reg.test(control.value)
    console.log('password的校验结果是'+valid)
    return valid ? null :{password: true}
}
//endregion

// export function equalValidatro(group: FormGroup):any {
//     let password: FormControl = group.get('password') as FormControl;
//     let pconfirm: FormControl = group.get('pconfirm') as FormControl;
//     let valid: boolean = (password.value === pconfirm.value);
//     console.log('密码校验结果：' + valid);
//     return valid ? null : {equal: true};
//   }
