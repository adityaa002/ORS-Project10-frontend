import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionusagelistComponent } from './subscriptionusagelist.component';

describe('SubscriptionusagelistComponent', () => {
  let component: SubscriptionusagelistComponent;
  let fixture: ComponentFixture<SubscriptionusagelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionusagelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionusagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
