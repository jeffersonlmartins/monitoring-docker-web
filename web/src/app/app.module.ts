import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, pt_BR } from 'ng-zorro-antd';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { EditComponent } from './pages/edit/edit.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IconsProviderModule,
    NgZorroAntdModule,
    NzCarouselModule,
    NzPopconfirmModule,
    NzRadioModule,
    NzUploadModule,
    NzTableModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
