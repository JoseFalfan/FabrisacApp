import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RollsPage } from './rolls.page';

describe('RollsPage', () => {
  let component: RollsPage;
  let fixture: ComponentFixture<RollsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RollsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
