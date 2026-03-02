import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Products {
  private cache: any[] = [];
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {
    // Load cache from localStorage if exists
    const stored = localStorage.getItem('productsCache');
    if (stored) {
      this.cache = JSON.parse(stored);
    }
  }

  getProductsList(): Observable<any> {
    if (this.cache.length > 0) {
      console.log('Returning cached products from memory/localStorage');
      return of({ products: this.cache });
    }

    console.log('Fetching products from API');
    return this.http.get(this.apiUrl).pipe(
      tap((data: any) => {
        this.cache = Array.isArray(data.products) ? data.products : [];
        localStorage.setItem('productsCache', JSON.stringify(this.cache));
        console.log('Products cached:', this.cache);
      })
    );
  }
}