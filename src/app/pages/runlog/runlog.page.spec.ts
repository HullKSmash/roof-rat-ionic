import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RunlogPage } from './runlog.page';

describe('RunlogPage', () => {
  let component: RunlogPage;
  let fixture: ComponentFixture<RunlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RunlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
