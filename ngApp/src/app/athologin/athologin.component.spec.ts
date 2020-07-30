import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthologinComponent } from './athologin.component';

describe('AthologinComponent', () => {
  let component: AthologinComponent;
  let fixture: ComponentFixture<AthologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
