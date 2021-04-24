import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MngWorksComponent } from './mng-works.component';

describe('MngWorksComponent', () => {
  let component: MngWorksComponent;
  let fixture: ComponentFixture<MngWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MngWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MngWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
