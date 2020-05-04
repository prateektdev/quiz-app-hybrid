import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinwalletPage } from './coinwallet.page';

describe('CoinwalletPage', () => {
  let component: CoinwalletPage;
  let fixture: ComponentFixture<CoinwalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinwalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinwalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
