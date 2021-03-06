import { Component } from '@angular/core';
import { Product } from './entities/Product';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    products: Array < Product > ;

    constructor() {
        this.products = [
            new Product(
                'MYSHOES',
                'Black Running Shoes',
                '/assets/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'],
                109.99
            ),
            new Product(
                'NEATOJACKET',
                'Blue Jacket',
                '/assets/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'],
                238.99
            ),
            new Product(
                'NICEHAT',
                'A Nice Black Hat',
                '/assets/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'],
                29.99
            ),
        ];
    }

    productWasSelected(product: Product): void {
        console.log('product clicked', product);
    }
}