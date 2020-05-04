import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetcoinPage } from './getcoin.page';

describe('GetcoinPage', () => {
  let component: GetcoinPage;
  let fixture: ComponentFixture<GetcoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcoinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetcoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
