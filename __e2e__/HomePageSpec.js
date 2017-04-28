import {HomePage} from './page-model'

fixture `home`.page `http://localhost:8080`;

const homePage = new HomePage()

test('It should change displayed text', async t => {
    await t
        .expect(homePage.sampleDiv.textContent).eql('Hello World')
        .click(homePage.sampleDiv)
        .expect(homePage.sampleDiv.textContent).eql('Hello World Conan')
})