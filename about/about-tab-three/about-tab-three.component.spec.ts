import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTabThreeComponent } from './about-tab-three.component';

describe('AboutTabThreeComponent', () => {
  let component: AboutTabThreeComponent;
  let fixture: ComponentFixture<AboutTabThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTabThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTabThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
