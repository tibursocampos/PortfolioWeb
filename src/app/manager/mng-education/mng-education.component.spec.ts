import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MngEducationComponent } from './mng-education.component';

describe('MngEducationComponent', () => {
  let component: MngEducationComponent;
  let fixture: ComponentFixture<MngEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MngEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MngEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
