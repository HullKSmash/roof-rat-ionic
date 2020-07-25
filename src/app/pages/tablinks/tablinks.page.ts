import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {
 
  constructor(
    public navController: NavController
  ) { }

  ngOnInit() { }

  @ViewChild('tabs') tabs: IonTabs;
  
  async handleTabClick (tab: string, event: MouseEvent) {
    const tabSelected = this.tabs.getSelected();
    event.stopImmediatePropagation();
    event.preventDefault();
    return tabSelected != tab 
      ? await this.navController.navigateRoot(this.tabs.outlet.tabsPrefix + '/' + tab)
      : this.tabs.select(tab);
  }

  tabChanged() {
  }



}
