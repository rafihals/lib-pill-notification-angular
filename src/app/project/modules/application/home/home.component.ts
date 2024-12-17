import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../../../service/notification.service';
import { AuthService } from '../../../service/auth.service';
import { onFadeInAnimation, onSlideInFromLeft } from '../../animation/animation.module';
import { MessageService, SelectItem } from 'primeng/api';
import { Product } from '../../interface/product';
import { ProductService } from '../../../service/product.service';


interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [onFadeInAnimation(), onSlideInFromLeft()]

})
export class HomeComponent implements OnInit {

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  products!: Product[];
  sortKey: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data.slice(0, 5)));

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

}
