import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitTenderComponent } from './submit-tender.component';

describe('SubmitTenderComponent', () => {
  let component: SubmitTenderComponent;
  let fixture: ComponentFixture<SubmitTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
