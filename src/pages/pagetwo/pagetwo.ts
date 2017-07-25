import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';


@Component({
    selector: 'page-pagetwo',
    templateUrl: 'pagetwo.html'
})


export class Pagetwo {

    constructor(
        public navCtrl: NavController,
        public menu: MenuController) {

        menu.enable(false, 'HomePage');
        menu.enable(false, 'Pageone');
        menu.enable(false, 'ContactPage');
        menu.enable(false, 'AboutPage');
        menu.enable(true, 'Pagetwo');
    }

    PageContact() {
        this.navCtrl.setRoot(ContactPage);
    }

    PageHome() {
        this.navCtrl.setRoot(HomePage);
    }

}