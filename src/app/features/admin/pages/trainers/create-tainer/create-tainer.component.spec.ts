import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTainerComponent } from './create-tainer.component';

describe('CreateTainerComponent', () => {
  let component: CreateTainerComponent;
  let fixture: ComponentFixture<CreateTainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
