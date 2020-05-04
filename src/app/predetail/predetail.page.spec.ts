import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PredetailPage } from './predetail.page';

describe('PredetailPage', () => {
  let component: PredetailPage;
  let fixture: ComponentFixture<PredetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PredetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
