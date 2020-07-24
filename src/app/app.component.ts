import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name;

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang("zh")
        this.translate.get('i18n.heyefu.name').subscribe((res: string) => {
            this.name = res;
        })
    }

    changeLanguage(language: string) {
        this.translate.setDefaultLang(language);
        this.translate.get('i18n.heyefu.name').subscribe((res: string) => {
            this.name = res;
        })
    }
}
