import { ComponentFixture, TestBed } from '@angular/core/testing';

import { portfolioComponent } from './portfolio.component';

describe('ProfiloComponent', () => {
  let component: portfolioComponent;
  let fixture: ComponentFixture<portfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ portfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(portfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
