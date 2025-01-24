import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTainerComponent } from './update-tainer.component';

describe('UpdateTainerComponent', () => {
  let component: UpdateTainerComponent;
  let fixture: ComponentFixture<UpdateTainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
