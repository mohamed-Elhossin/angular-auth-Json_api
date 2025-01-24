import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTainersComponent } from './list-tainers.component';

describe('ListTainersComponent', () => {
  let component: ListTainersComponent;
  let fixture: ComponentFixture<ListTainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
