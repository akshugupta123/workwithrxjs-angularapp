import { Component, OnInit } from '@angular/core';
import { ProductService } from '../ProductService'; // Adjust the import path

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html', // Adjust the template file path
  styleUrls: ['./product-list-component.component.css'] // Adjust the CSS file path
})
export class ProductListComponent implements OnInit {
  products: any[] = []; // Initialize the products property with an empty array
  error: string | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data: any) => {
        this.products = data.products;
        this.error = null; // Clear any previous error
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.error = 'Error fetching products. Please try again later.';
      }
    );
  }
}
