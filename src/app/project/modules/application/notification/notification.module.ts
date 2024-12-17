import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { RouterModule, Routes } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { OrderListModule } from 'primeng/orderlist';
import { DragDropModule } from 'primeng/dragdrop';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ScrollerModule } from 'primeng/scroller';
import { ButtonModule } from 'primeng/button';


const routes: Routes = [
  { path: '', component: NotificationComponent }
];

@NgModule({
  imports: [
    CommonModule,

    TabViewModule,
    AvatarModule,
    BadgeModule,
    OrderListModule,
    AccordionModule,
    AvatarModule,
    BadgeModule,
    CardModule,
    ScrollerModule,
    ButtonModule,


    RouterModule.forChild(routes)
  ],
  declarations: [NotificationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotificationModule { }
