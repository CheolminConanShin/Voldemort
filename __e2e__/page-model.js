import {Selector} from 'testcafe'
const div = Selector('div')

export class HomePage {
    constructor() {
        this.sampleDiv = div.withText('Hello World')
    }
}