import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapModelComponent } from './bootstrap-model.component';

describe('BootstrapModelComponent', () => {
  let component: BootstrapModelComponent;
  let fixture: ComponentFixture<BootstrapModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BootstrapModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootstrapModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
