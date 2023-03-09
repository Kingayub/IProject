import { Comment } from '../../../src/entities/Comment';

export const addComment = (text: string) => {
    cy.getByTestId('AddCommentForm.Input').type(text);
    cy.getByTestId('AddCommentForm.Button').click();
};

export const removeComment = (articleId:string, commentId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}/${commentId}`,
        headers: { Authorization: 'asdsa' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            removeComment(articleId:string, commentId:string): Chainable<void>;
            addComment(text:string): Chainable<Comment>;
        }
    }
}
