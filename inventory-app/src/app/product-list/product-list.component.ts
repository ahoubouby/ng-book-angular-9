import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../entities/Product';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    @Input()
    productList: Array < Product > ;
    @Output()
    onProductSelected: EventEmitter < Product > ;

    currentProduct: Product;
    constructor() {
        this.onProductSelected = new EventEmitter();
    }

    ngOnInit(): void {}

    clicked(p: Product): void {
        this.currentProduct = p;
        this.onProductSelected.emit(p);
    }

    isSelected(p: Product): boolean {
        if (!p || !this.currentProduct) return false;
        return p.sku == this.currentProduct.sku;
    }
}