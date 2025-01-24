import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTabOneComponent } from './about-tab-one.component';

describe('AboutTabOneComponent', () => {
  let component: AboutTabOneComponent;
  let fixture: ComponentFixture<AboutTabOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTabOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
