import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Validators} from "@angular/forms";
import {forbiddenNameValidator} from "../shared/forbidden-name-directive";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items;
    checkoutForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private cartService: CartService
    ) {
        this.checkoutForm = this.formBuilder.group({
            name: ['', [forbiddenNameValidator(/bob/i)]],
            address: ''
        });
    }

    ngOnInit(): void {
        this.items = this.cartService.getItems();
    }

    onSubmit(customerData) {
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
        console.warn('Your order has been submitted', customerData);
    }

    get name() {
        return this.checkoutForm.get('name');
    }
}
