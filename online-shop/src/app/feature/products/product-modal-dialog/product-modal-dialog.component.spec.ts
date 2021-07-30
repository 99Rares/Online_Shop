import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModalDialogComponent } from './product-modal-dialog.component';

describe('ProductModalDialogComponent', () => {
  let component: ProductModalDialogComponent;
  let fixture: ComponentFixture<ProductModalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductModalDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
