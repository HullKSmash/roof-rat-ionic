import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandmarkPage } from './landmark.page';

describe('LandmarkPage', () => {
  let component: LandmarkPage;
  let fixture: ComponentFixture<LandmarkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandmarkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandmarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
