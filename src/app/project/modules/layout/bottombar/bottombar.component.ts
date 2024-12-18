import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { PrimeIcons } from 'primeng/api'; // Import PrimeIcons
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss']
})
export class BottombarComponent implements OnInit {
  activeMenuItem: string = 'purple';
  headerBar: boolean = false;
  menuItems: { color: string; label: string; icon: string }[] = []; // Define menu items

  constructor(
    private router: Router,
    private authSvc: AuthService,
  ) {}

  ngOnInit(): void {
    // Define menu items with PrimeIcons
    this.menuItems = [
      { color: 'purple', label: 'Home', icon: PrimeIcons.HOME },
      { color: 'pink', label: 'Notification', icon: PrimeIcons.BELL },
      { color: 'cyan', label: 'Profile', icon: PrimeIcons.USER }
    ];
    console.log(this.menuItems,'menuItems');

    if (this.authSvc.isLoggedIn()) {
      this.headerBar = true;
    } else {
      this.headerBar = false;
    }
  }

  onMenuItemClick(color: string): void {
    this.activeMenuItem = color;
    this.navigateToPage(color); // Navigate to the corresponding page
  }

  private navigateToPage(color: string): void {
    const routeMap: { [key: string]: string } = {
      purple: '/home',
      pink: '/notifications',
      cyan: '/settings'
    };
    const route = routeMap[color] || '/home'; // Default route to /home
    this.router.navigate([route]);
  }

  isActive(color: string): boolean {
    return this.activeMenuItem === color;
  }

  getBackgroundColor(color: string): string {
    return this.isActive(color) ? this.getLightenedColor(color) : 'transparent';
  }

  private getLightenedColor(color: string): string {
    const colorMap: { [key: string]: string } = {
      purple: '#D1C4E9',
      pink: '#F8BBD0',
      ocher: '#FFE082',
      cyan: '#B2EBF2'
    };
    return colorMap[color] || 'transparent';
  }

  getStyles(color: string): { [key: string]: string } {
    return {
      width: this.isActive(color) ? '89px' : '50px', // Adjust width when active
      transition: 'width 0.3s ease', // Smooth transition for width change
      'background-color': this.getBackgroundColor(color), // Set background color
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center'
    };
  }
}
