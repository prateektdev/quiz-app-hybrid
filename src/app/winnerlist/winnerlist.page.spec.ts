import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WinnerlistPage } from './winnerlist.page';

describe('WinnerlistPage', () => {
  let component: WinnerlistPage;
  let fixture: ComponentFixture<WinnerlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WinnerlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
