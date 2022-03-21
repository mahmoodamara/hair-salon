import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehomeComponent } from './updatehome.component';

describe('UpdatehomeComponent', () => {
  let component: UpdatehomeComponent;
  let fixture: ComponentFixture<UpdatehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
