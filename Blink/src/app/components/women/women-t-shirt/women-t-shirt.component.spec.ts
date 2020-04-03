import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenTShirtComponent } from './women-t-shirt.component';

describe('WomenTShirtComponent', () => {
  let component: WomenTShirtComponent;
  let fixture: ComponentFixture<WomenTShirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenTShirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenTShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
