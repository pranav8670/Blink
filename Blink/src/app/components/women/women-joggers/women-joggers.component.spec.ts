import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenJoggersComponent } from './women-joggers.component';

describe('WomenJoggersComponent', () => {
  let component: WomenJoggersComponent;
  let fixture: ComponentFixture<WomenJoggersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenJoggersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenJoggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
