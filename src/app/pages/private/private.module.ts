import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { MessagesComponent } from './messages/messages.component';
import { EzsocialComponent } from './ezsocial/ezsocial.component';
import { ProductsComponent } from './products/products.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DemoFlexyModule } from '../../demo-flexy-module';


@NgModule({
  declarations: [
    OrdersComponent,
    MessagesComponent,
    EzsocialComponent,
    ProductsComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    FormsModule,
    DemoFlexyModule
  ],
  exports: [
    OrdersComponent,
    MessagesComponent,
    EzsocialComponent,
    ProductsComponent,
    AnalyticsComponent
  ]
})
export class PrivateModule { }
