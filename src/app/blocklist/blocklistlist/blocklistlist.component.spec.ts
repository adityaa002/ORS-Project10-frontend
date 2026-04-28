import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocklistlistComponent } from './blocklistlist.component';

describe('BlocklistlistComponent', () => {
  let component: BlocklistlistComponent;
  let fixture: ComponentFixture<BlocklistlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocklistlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocklistlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
