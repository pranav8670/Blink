import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyjamasComponent } from './pyjamas.component';

describe('PyjamasComponent', () => {
  let component: PyjamasComponent;
  let fixture: ComponentFixture<PyjamasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyjamasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyjamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
