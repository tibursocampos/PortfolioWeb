import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MngCoursesComponent } from './mng-courses.component';

describe('MngCoursesComponent', () => {
  let component: MngCoursesComponent;
  let fixture: ComponentFixture<MngCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MngCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MngCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
