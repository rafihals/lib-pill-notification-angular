import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

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
    RouterModule.forChild(routes)
  ],
  providers: [
    MessageService
  ]
})
export class HomeModule { }
