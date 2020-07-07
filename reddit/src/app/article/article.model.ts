//@ts-nocheck
export class Article {
    title: String
    link: string
    votes: number

    constructor(title: string, link: string, votes ? : number) {
        this.title = title
        this.link = link
        this.votes = votes || 0
    }

    voteUp(): void {
        this.votes += 1
    }
    voteDown(): void {
        if (!!this.votes) this.votes -= 1
    }

    private _head = ([x, xs]) => x
    private _second = ([head, second, xs]) => second

    domain(): string {
        try {
            const domainAndPath: string = this._second(this.link.split('//'))

            return this._head(domainAndPath.split('/'))
        } catch (err) {
            console.log(err)
        }
    }
}