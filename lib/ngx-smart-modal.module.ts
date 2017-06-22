import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxSmartModalService} from './ngx-smart-modal.service';
import {NgxSmartModalComponent} from './ngx-smart-modal.component';
@NgModule({
    imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
    declarations: [NgxSmartModalComponent],
    exports: [NgxSmartModalComponent],
    providers: [NgxSmartModalService],
})
export class NgxSmartModalModule {
}
