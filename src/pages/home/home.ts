import { Component } from '@angular/core';
import { NavController, MenuController  } from 'ionic-angular';
import { Pageone } from '../pageone/pageone';
import { Pagetwo } from '../pagetwo/pagetwo';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

    constructor(
        public navCtrl: NavController,
        public menu: MenuController) {

        menu.enable(false, 'Pageone');
        menu.enable(false, 'Pagetwo');
        menu.enable(false, 'ContactPage');
        menu.enable(false, 'AboutPage');
        menu.enable(true, 'HomePage');

    }
  
  PageOne() {
      this.navCtrl.setRoot(Pageone);
  }

  PageTwo() {
      this.navCtrl.setRoot(Pagetwo);
  }

}