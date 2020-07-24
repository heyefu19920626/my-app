import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {FormBuilder} from "@angular/forms";
import {Validators} from "@angular/forms";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items;
    checkoutForm;

    constructor(
        private formBuilder: FormBuilder,
        private cartService: CartService
    ) {
        this.checkoutForm = this.formBuilder.group({
            name: ['',Validators.required],
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
}
