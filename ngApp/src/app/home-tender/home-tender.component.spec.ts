import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTenderComponent } from './home-tender.component';

describe('HomeTenderComponent', () => {
  let component: HomeTenderComponent;
  let fixture: ComponentFixture<HomeTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
