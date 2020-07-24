import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-hero-form-templete',
    templateUrl: './hero-form-templete.component.html',
    styleUrls: ['./hero-form-templete.component.css']
})
export class HeroFormTempleteComponent implements OnInit {
    powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
    hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

    constructor() {
    }

    ngOnInit(): void {
    }
}
