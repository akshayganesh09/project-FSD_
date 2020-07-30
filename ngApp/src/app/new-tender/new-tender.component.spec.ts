import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTenderComponent } from './new-tender.component';

describe('NewTenderComponent', () => {
  let component: NewTenderComponent;
  let fixture: ComponentFixture<NewTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
