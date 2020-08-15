import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DangkyComponent } from './dangky/dangky.component';
import { confirmValidatorDirective } from './shared/confirm-valdator.directive';
import { ThongtinComponent } from './thongtin/thongtin.component';
import { DatlichComponent } from './datlich/datlich.component';
import { QuanlyComponent } from './quanly/quanly.component';
import { QuanlylichComponent } from './quanlylich/quanlylich.component';
import { DichvuComponent } from './dichvu/dichvu.component';
import { TintucComponent } from './tintuc/tintuc.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,
    
    ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot([
      {path:'' , component:HomepageComponent },
      {path:'dangnhap' , component:DangnhapComponent },
      {path:'dangky' , component:DangkyComponent },
      {path:'thongtin' , component:ThongtinComponent },
      {path:'quanly' , component:QuanlyComponent },
      {path:'datlich' , component:DatlichComponent },
      {path:'quanlylich' , component:QuanlylichComponent },
      {path: 'dichvu', component: DichvuComponent},
      {path: 'tintuc', component: TintucComponent}
    ])
  ],
  declarations: [ AppComponent,
    HelloComponent,
    DangnhapComponent,
    HomepageComponent,
    DangkyComponent,
    confirmValidatorDirective,
    ThongtinComponent,
    DatlichComponent,
    QuanlyComponent,
    QuanlylichComponent,
    DichvuComponent,
    TintucComponent 
  
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
