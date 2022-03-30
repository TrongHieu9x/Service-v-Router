import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeleteComponent } from './product-delete.component';

describe('DeleteComponent', () => {
  let component: ProductDeleteComponent;
  let fixture: ComponentFixture<ProductDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
