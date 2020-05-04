import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CricketrulePage } from './cricketrule.page';

describe('CricketrulePage', () => {
  let component: CricketrulePage;
  let fixture: ComponentFixture<CricketrulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketrulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CricketrulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
