import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {
 
  @ViewChild('tabs') tabs: IonTabs;

  resetStackTabs = ['indox', 'tasks'];
  
  handleTabClick = (event: MouseEvent) => {
    const {tab} = event.composedPath().find((element: any) => 
    element.tagName === 'ION-TAB-BUTTON') as EventTarget & {tab: string};
    if (this.resetStackTabs.includes(tab) && 
        this.tabs.outlet.canGoBack(1, tab)) {
          event.stopImmediatePropagation();
          return this.tabs.outlet.pop(1, tab);
        }
  }

  constructor() { }

  ngOnInit() {
  }

}
