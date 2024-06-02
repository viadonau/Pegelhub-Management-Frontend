import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotFoundPageComponent } from './page-not-found.page'; // Angenommen, der korrekte Exportname ist PageNotFoundPageComponent

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundPageComponent;
  let fixture: ComponentFixture<PageNotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNotFoundPageComponent] // Hier declarations statt imports
    })
        .compileComponents();

    fixture = TestBed.createComponent(PageNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(!!component).to.be.true; // Verwende to.be.true für Cypress
  });
});
