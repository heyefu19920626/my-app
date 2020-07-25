import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAlertsComponent} from './product-alerts/product-alerts.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';
import {ShippingComponent} from './shipping/shipping.component';

import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HeroFormTemplateComponent} from './hero-form-templete/hero-form-template.component';
import {HeroFormReactiveComponent} from './hero-form-reactive/hero-form-reactive.component';
import {ForbiddenValidatorDirective} from "./shared/forbidden-name-directive";
import {IdentityRevealedValidatorDirective} from "./shared/identity-revealed.directive";
import {UniqueAlterEgoValidatorDirective} from "./shared/alter-ego.directive";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        // 放在这以便全局注册, 翻译模块
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        RouterModule.forRoot([
            {path: '', component: ProductListComponent},
            {path: 'products/:productId', component: ProductDetailsComponent},
            {path: 'cart', component: CartComponent},
            {path: 'shipping', component: ShippingComponent},
        ])
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent,
        ProductAlertsComponent,
        ProductDetailsComponent,
        CartComponent,
        ShippingComponent,
        HeroFormTemplateComponent,
        HeroFormReactiveComponent,
        ForbiddenValidatorDirective,
        IdentityRevealedValidatorDirective,
        UniqueAlterEgoValidatorDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

// IOT
export function HttpLoaderFactory(http: HttpClient) {
    // 默认i18n可以省略
    return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
