import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachelistComponent } from './cachelist.component';

describe('CachelistComponent', () => {
  let component: CachelistComponent;
  let fixture: ComponentFixture<CachelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CachelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CachelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
