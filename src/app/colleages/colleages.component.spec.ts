import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagesComponent } from './colleages.component';

describe('ColleagesComponent', () => {
  let component: ColleagesComponent;
  let fixture: ComponentFixture<ColleagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColleagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColleagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
