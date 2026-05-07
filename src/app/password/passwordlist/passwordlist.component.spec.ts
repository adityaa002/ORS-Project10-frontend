import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordlistComponent } from './passwordlist.component';

describe('PasswordlistComponent', () => {
  let component: PasswordlistComponent;
  let fixture: ComponentFixture<PasswordlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
