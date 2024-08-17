import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoButtonComponent } from './memo-button.component';

describe('MemoButtonComponent', () => {
  let component: MemoButtonComponent;
  let fixture: ComponentFixture<MemoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
