import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundPageComponent } from '@routes/page-not-found/page-not-found.page'; // Angenommen, der korrekte Exportname ist PageNotFoundPageComponent

describe('PageNotFoundPageComponent', () => {
  beforeEach(() => {
    cy.mount(PageNotFoundPageComponent, {
      imports: [NoopAnimationsModule],
    });
  });

  it('should create', () => {});
});
