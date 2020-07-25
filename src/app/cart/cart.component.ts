import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {FormBuilder, FormGroup} from '@angular/forms';
import {Validators} from "@angular/forms";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items;
    checkoutForm: FormGroup;
    formErrors = {
        username: ''
    }
    validationMessage = {
        'username': {
            'minlength': '用户名长度最少为3个字符',
            'maxlength': '用户名长度最多为10个字符',
            'required': '请填写用户名'
        }
    }

    constructor(
        private formBuilder: FormBuilder,
        private cartService: CartService
    ) {
        this.checkoutForm = this.formBuilder.group({
            name: ['', Validators.required],
            address: ''
        });
        this.checkoutForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }

    ngOnInit(): void {
        this.items = this.cartService.getItems();
    }

    onSubmit(customerData) {
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
        console.warn('Your order has been submitted', customerData);
    }

    onValueChanged(data?: any) {
        // 如果表单不存在则返回
        if (!this.checkoutForm) return;
        // 获取当前的表单
        const form = this.checkoutForm;

        // 遍历错误消息对象
        for (const field in this.formErrors) {
            // 清空当前的错误消息
            this.formErrors[field] = '';
            // 获取当前表单的控件
            const control = form.get(field);

            // 当前表单存在此空间控件 && 此控件没有被修改 && 此控件验证不通过
            if (control && control.dirty && !control.valid) {
                // 获取验证不通过的控件名，为了获取更详细的不通过信息
                const messages = this.validationMessage[field];
                // 遍历当前控件的错误对象，获取到验证不通过的属性
                for (const key in control.errors) {
                    // 把所有验证不通过项的说明文字拼接成错误消息
                    this.formErrors[field] += messages[key] + '\n';
                }
            }
        }
    }
}
