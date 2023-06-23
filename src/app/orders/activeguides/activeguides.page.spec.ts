import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveguidesPage } from './activeguides.page';

describe('ActiveguidesPage', () => {
  let component: ActiveguidesPage;
  let fixture: ComponentFixture<ActiveguidesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActiveguidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
