import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home.page'; // Angenommen, der korrekte Exportname ist HomePageComponent

describe('HomeComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent] // Hier declarations statt imports
    })
        .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(!!component).to.be.true; // Verwende to.be.true für Cypress
  });
});
