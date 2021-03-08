import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Set4Page } from './set4.page';

describe('Set4Page', () => {
  let component: Set4Page;
  let fixture: ComponentFixture<Set4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Set4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Set4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
