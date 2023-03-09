export const updateProfile = (firstname: string, lastname:string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asdsa' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 39,
            currency: 'USD',
            country: 'Russia',
            city: 'Moscow',
            username: 'Blaevskiy',
            avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/3517023/pub_603580012dc5795636076dd1_'
                + '603582442dc579563608f109/scale_1200',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname:string, lastname:string): Chainable<void>;
            resetProfile(profileId:string): Chainable<void>;
        }
    }
}
