import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFromDemoComponent } from './template-from-demo.component';

describe('TemplateFromDemoComponent', () => {
  let component: TemplateFromDemoComponent;
  let fixture: ComponentFixture<TemplateFromDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFromDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFromDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
