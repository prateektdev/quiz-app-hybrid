import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EarnwalletPage } from './earnwallet.page';

describe('EarnwalletPage', () => {
  let component: EarnwalletPage;
  let fixture: ComponentFixture<EarnwalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnwalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EarnwalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
