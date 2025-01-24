import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTabTwoComponent } from './about-tab-two.component';

describe('AboutTabTwoComponent', () => {
  let component: AboutTabTwoComponent;
  let fixture: ComponentFixture<AboutTabTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTabTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTabTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
