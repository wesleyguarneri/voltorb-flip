import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoIconButtonComponent } from './memo-icon-button.component';

describe('MemoIconButtonComponent', () => {
  let component: MemoIconButtonComponent;
  let fixture: ComponentFixture<MemoIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoIconButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
