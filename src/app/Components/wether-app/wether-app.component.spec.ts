import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WetherAppComponent } from './wether-app.component';

describe('WetherAppComponent', () => {
  let component: WetherAppComponent;
  let fixture: ComponentFixture<WetherAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WetherAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WetherAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
