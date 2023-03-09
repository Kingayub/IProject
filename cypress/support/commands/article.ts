import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Python news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://www.askpython.com/wp-content/uploads/2021/11/Python_in_Web_Development.jpg',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'IT',
    ],
    blocks: [],
};
export const createArticle = (article?:Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'asdsa' },
        body: article ?? defaultArticle,
    }).then((res) => res.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asdsa' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?:Article): Chainable<Article>;
            removeArticle(articleId:string): Chainable<void>;
        }
    }
}
