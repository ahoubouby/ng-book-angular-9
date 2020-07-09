import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    cities: [];
    peoples: [];
    constructor() {
        this.cities = ['Miami', 'Sao Paulo', 'New York'];
        this.peoples = [
            { name: 'Anderson', age: 35, city: 'Sao Paulo' },
            { name: 'John', age: 12, city: 'Miami' },
            { name: 'Peter', age: 22, city: 'New York' },
        ];
    }
}