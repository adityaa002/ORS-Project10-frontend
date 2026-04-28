import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionusageComponent } from './subscriptionusage.component';

describe('SubscriptionusageComponent', () => {
  let component: SubscriptionusageComponent;
  let fixture: ComponentFixture<SubscriptionusageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionusageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
