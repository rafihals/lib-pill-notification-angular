import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BottombarComponent } from './project/modules/layout/bottombar/bottombar.component';
import { AuthGuard } from './project/service/auth.guard.service.';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./project/modules/auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./project/modules/auth/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: '',
    component: BottombarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./project/modules/application/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('./project/modules/application/settings/settings.module').then(m => m.SettingsModule),
      },
      {
        path: 'notifications',
        loadChildren: () => import('./project/modules/application/notification/notification.module').then(m => m.NotificationModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
