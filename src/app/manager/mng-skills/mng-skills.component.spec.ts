import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MngSkillsComponent } from './mng-skills.component';

describe('MngSkillsComponent', () => {
  let component: MngSkillsComponent;
  let fixture: ComponentFixture<MngSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MngSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MngSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
