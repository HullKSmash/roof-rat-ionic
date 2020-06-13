import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandmarkListPage } from './landmark-list.page';

describe('LandmarkListPage', () => {
  let component: LandmarkListPage;
  let fixture: ComponentFixture<LandmarkListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandmarkListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandmarkListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
