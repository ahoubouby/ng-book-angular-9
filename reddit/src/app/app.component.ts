import { Component } from '@angular/core'
import { Article } from './article/article.model'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    private articles: Array < Article >
        constructor() {
            this.articles = [
                new Article('Angular', 'http://angular.io', 3),
                new Article('Docker', 'http://docker.io'),
                new Article('Scala', 'http://dotty.io', 30),
            ]
        }
    addArticle({ value }: HTMLInputElement, { value: valueTitle }: HTMLInputElement) {
        console.log(`adding article title : ${value} and link ${valueTitle}`)

        this.articles.push(new Article(value, valueTitle))
        return false
    }

    sortedArticles() {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
    }
}