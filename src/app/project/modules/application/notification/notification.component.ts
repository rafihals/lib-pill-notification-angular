import { Component, OnInit } from '@angular/core';
import { Badge } from 'primeng/badge';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../interface/product';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent implements OnInit {

  products!: Product[];
  tabs = [
    {
      name: 'Amy Elsner',
      avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      badge: 3,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      name: 'Onyama Limba',
      avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png',
      badge: 4,
      content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    },
    {
      name: 'Ioni Bowcher',
      avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png',
      badge: 2,
      content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.`,
    },
  ];

  notifications = [
    {
      title: 'New Message',
      description: 'You have received a new message from John Doe.',
      time: '10:45 AM',
    },
    {
      title: 'System Update',
      description: 'Your system was updated successfully.',
      time: '9:30 AM',
    },
    {
      title: 'Reminder',
      description: 'Don’t forget to submit your report today.',
      time: '8:00 AM',
    },
    {
      title: 'New Follower',
      description: 'Alice has started following you.',
      time: '7:15 AM',
    },
    {
      title: 'Low Battery',
      description: 'Your device battery is low. Please charge soon.',
      time: '6:50 AM',
    },

  ];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then((cars) => (this.products = cars));
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'unknown';
    }
  }

}
