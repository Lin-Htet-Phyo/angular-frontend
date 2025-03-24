import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiDemo2Component } from './di-demo2.component';

describe('DiDemo2Component', () => {
  let component: DiDemo2Component;
  let fixture: ComponentFixture<DiDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiDemo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
