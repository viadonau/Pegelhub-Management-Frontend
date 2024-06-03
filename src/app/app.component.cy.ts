import { AppComponent } from './app.component';

describe('App Component', () => {
    before(() => {
        // Vor jedem Test die AppComponent rendern
        cy.visit('/');
        cy.get('app-root').then(() => {
            cy.mount(AppComponent);
        });
    });

    it('should include heading', () => {
        // Testen, ob die Überschrift vorhanden ist
        cy.get('h1').should('be.visible').and('contain.text', 'Heading');
    });
});
