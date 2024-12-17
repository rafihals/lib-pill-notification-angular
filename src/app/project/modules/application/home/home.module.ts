import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { RippleModule } from 'primeng/ripple';

import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { ProductService } from '../../../service/product.service';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AnimateOnScrollModule,
    AvatarModule,
    SharedModule,
    ButtonModule,
    ToolbarModule,
    RippleModule,
    ToastModule,
    TimelineModule,
    CardModule,
    DataViewModule,
    TagModule,
    DragDropModule,
    DropdownModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    MessageService,
    ProductService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
