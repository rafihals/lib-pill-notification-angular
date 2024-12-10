import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private intervalSubscription: Subscription | undefined;

  constructor() {}

  // Meminta izin untuk menampilkan notifikasi
  requestNotificationPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Izin notifikasi diberikan.');
        } else {
          console.error('Izin notifikasi ditolak.');
        }
      });
    } else {
      console.error('Browser tidak mendukung Notifications API.');
    }
  }

  // Menampilkan notifikasi dengan suara
  showNotification() {
    if (Notification.permission === 'granted') {
      const notification = new Notification('Promo Baru!', {
        body: 'Diskon besar-besaran hanya hari ini!',
        icon: 'assets/core/sudut1.png',
      });

      // Memainkan suara notifikasi
      const audio = new Audio('/assets/sond.mp3');
      audio.play();

      notification.onclick = () => {
        console.log('Notifikasi diklik!');
        window.open('https://gitlab.uii.ac.id/finance');
      };
    } else {
      console.error('Izin untuk notifikasi belum diberikan.');
    }
  }

  // Mulai menampilkan notifikasi setiap interval tertentu
  startNotifications() {
    this.intervalSubscription = interval(30000).subscribe(() => {
      this.showNotification();
    });
  }

  // Hentikan notifikasi
  stopNotifications() {
    this.intervalSubscription?.unsubscribe();
  }
}
