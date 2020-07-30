import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthoregsiterComponent } from './athoregsiter.component';

describe('AthoregsiterComponent', () => {
  let component: AthoregsiterComponent;
  let fixture: ComponentFixture<AthoregsiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthoregsiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthoregsiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
