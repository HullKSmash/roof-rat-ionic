import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouteSelectPage } from './route-select.page';

describe('RouteSelectPage', () => {
  let component: RouteSelectPage;
  let fixture: ComponentFixture<RouteSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RouteSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
