import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MgmtPage } from './mgmt.page';

describe('MgmtComponent', () => {
  let component: MgmtPage;
  let fixture: ComponentFixture<MgmtPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MgmtPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MgmtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to('be.truthy');
  });
});
