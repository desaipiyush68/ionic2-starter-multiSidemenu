import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Pagetwo } from '../pagetwo/pagetwo';

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})


export class ContactPage {

    constructor(
        public navCtrl: NavController,
        public menu: MenuController) {
        menu.enable(false, 'Pageone');
        menu.enable(false, 'Pagetwo');
        menu.enable(false, 'HomePage');
        menu.enable(false, 'AboutPage');
        menu.enable(true, 'ContactPage');
    }

    HomePage() {
        this.navCtrl.setRoot(HomePage);
    }

    PageTwo() {
        this.navCtrl.setRoot(Pagetwo);
    }

}