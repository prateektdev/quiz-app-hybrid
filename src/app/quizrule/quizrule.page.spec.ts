import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizrulePage } from './quizrule.page';

describe('QuizrulePage', () => {
  let component: QuizrulePage;
  let fixture: ComponentFixture<QuizrulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizrulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizrulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
