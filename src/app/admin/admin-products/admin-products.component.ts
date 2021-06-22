import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/shared/services/products/product.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {

  products$!: Product[];
  filteredProducts!: any;
  subscription!: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe((products: any) => {
        this.filteredProducts = this.products$ = products;
        setTimeout(() => {
          $('#datatableexample').DataTable({
            pagingType: 'full_numbers',
            pageLength: 2,
            processing: true,
            lengthMenu: [2, 10, 25]
          });
        }, 1);
      }, error => console.error(error));

  }

  // filter(query: string) {
  //   this.filteredProducts =
  //     (query) ?
  //       this.products$.filter((p: any) => p.payload.val().title && p.payload.val().title.toLowerCase()
  //         .includes(query.toLowerCase())) :
  //       this.products$;
  //   console.log(this.filteredProducts);
  //   console.log(this.products$);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
