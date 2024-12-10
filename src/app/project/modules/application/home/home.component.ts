import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../../../service/notification.service';
import { AuthService } from '../../../service/auth.service';
import { onFadeInAnimation, onSlideInFromLeft } from '../../animation/animation.module';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [onFadeInAnimation(), onSlideInFromLeft()]

})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    public notificationService: NotificationService,
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  ngOnInit() {
    this.authService.isLoggedIn();

    // Meminta izin notifikasi
    this.notificationService.requestNotificationPermission();

    // Mulai notifikasi berkala
    this.notificationService.startNotifications();
  }

  ngOnDestroy() {
    // Hentikan notifikasi saat komponen dihancurkan
    this.notificationService.stopNotifications();
  }
}
