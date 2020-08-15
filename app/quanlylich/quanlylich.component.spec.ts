import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlylichComponent } from './quanlylich.component';

describe('QuanlylichComponent', () => {
  let component: QuanlylichComponent;
  let fixture: ComponentFixture<QuanlylichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlylichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlylichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
