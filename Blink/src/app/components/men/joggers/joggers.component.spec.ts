import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoggersComponent } from './joggers.component';

describe('JoggersComponent', () => {
  let component: JoggersComponent;
  let fixture: ComponentFixture<JoggersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoggersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
