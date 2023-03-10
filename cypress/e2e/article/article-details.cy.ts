import { removeArticle } from '../../support/commands/article';

let currentArticleId = '';
let currentComment = '';
describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
            cy.createArticle().then((article) => {
                currentArticleId = article.id;
                cy.visit(`articles/${article.id}`);
            });
        });
    });
    afterEach(() => {
        removeArticle(currentArticleId);
        // removeComment(currentArticleId, currentComment);
    });
    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('И видит список рекоммендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text').then((comment) => {
            currentComment = comment.id;
        });
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('И ставит оценку', () => {
        cy.intercept('GET', '**/article/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
