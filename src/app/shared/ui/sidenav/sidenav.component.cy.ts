import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavComponent } from "@shared/ui";

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to('be.truthy');
  });
});
