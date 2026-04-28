import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulelistComponent } from './rulelist.component';

describe('RulelistComponent', () => {
  let component: RulelistComponent;
  let fixture: ComponentFixture<RulelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
