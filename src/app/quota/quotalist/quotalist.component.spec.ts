import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotalistComponent } from './quotalist.component';

describe('QuotalistComponent', () => {
  let component: QuotalistComponent;
  let fixture: ComponentFixture<QuotalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotalistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
