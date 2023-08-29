import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NakedPage } from './naked.page';

describe('NakedPage', () => {
  let component: NakedPage;
  let fixture: ComponentFixture<NakedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NakedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
