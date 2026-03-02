import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Products } from '../services/products';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './api.html',
  styleUrls: ['./api.css']
})
export class Api implements OnInit {
  //storing products into list
  productList: any[] = [];

  //instantiating products service to fetch data from API
  constructor(private productService: Products) {}

  //fetching products list on component initialization
  ngOnInit(): void {
    this.productService.getProductsList().subscribe({
      next: (data: any) => {
        this.productList = Array.isArray(data.products) ? data.products : [];
        console.log('Products loaded in component:', this.productList);
      },
      error: (err) => console.error('API error:', err)
    });
  }

  trackById(index: number, item: any) {
    return item.id || index;
  }
}