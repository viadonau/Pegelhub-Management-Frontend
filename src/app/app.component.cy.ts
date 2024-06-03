import { AppComponent } from "./app.component";

describe('App Component', () => {
    it('should include heading', () => {
        cy.mount(AppComponent);
        cy.get('h2').should('contain.text', 'Heading');
    })
});
