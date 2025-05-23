import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDemoComponent } from './switch-demo.component';

describe('SwitchDemoComponent', () => {
  let component: SwitchDemoComponent;
  let fixture: ComponentFixture<SwitchDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
