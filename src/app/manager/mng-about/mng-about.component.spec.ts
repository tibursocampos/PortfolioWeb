import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MngAboutComponent } from './mng-about.component';

describe('MngAboutComponent', () => {
  let component: MngAboutComponent;
  let fixture: ComponentFixture<MngAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MngAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MngAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
