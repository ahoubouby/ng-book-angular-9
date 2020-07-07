import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Product } from '../entities/Product';

@Component({
    selector: 'product-image',
    templateUrl: './product-image.component.html',
    styleUrls: ['./product-image.component.css'],
})
export class ProductImageComponent implements OnInit {
    @Input()
    product: Product;
    @HostBinding('attr.class') cssClass = 'ui small image';
    constructor() {}

    ngOnInit(): void {}
}