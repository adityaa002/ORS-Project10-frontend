import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecryptionlistComponent } from './decryptionlist.component';

describe('DecryptionlistComponent', () => {
  let component: DecryptionlistComponent;
  let fixture: ComponentFixture<DecryptionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecryptionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecryptionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
