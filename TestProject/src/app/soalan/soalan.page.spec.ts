import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoalanPage } from './soalan.page';

describe('SoalanPage', () => {
  let component: SoalanPage;
  let fixture: ComponentFixture<SoalanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoalanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoalanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
