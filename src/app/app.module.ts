import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NotificationComponent } from './project/modules/application/notification/notification.component';
import { BottombarComponent } from './project/modules/layout/bottombar/bottombar.component';
import { LoadingComponent } from './project/modules/layout/loading/loading.component';
import { AuthService } from './project/service/auth.service';
import { AuthGuard } from './project/service/auth.guard.service.';
import { NotificationService } from './project/service/notification.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
// import { ImportsPrimeNGModule } from './project/service/primeng.service.module';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    BottombarComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    // ImportsPrimeNGModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    provideClientHydration(),
    AuthService,
    AuthGuard,
    NotificationService,
    PrimeIcons
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
