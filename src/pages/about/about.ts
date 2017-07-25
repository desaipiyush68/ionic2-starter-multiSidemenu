import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Pageone } from '../pageone/pageone';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})


export class AboutPage {

    constructor(
        public navCtrl: NavController,
        public menu: MenuController) {
        menu.enable(false, 'Pageone');
        menu.enable(false, 'Pagetwo');
        menu.enable(false, 'HomePage');
        menu.enable(false, 'ContactPage');
        menu.enable(true, 'AboutPage');
    }

    PageHome() {
        this.navCtrl.setRoot(HomePage);
    }

    PageOne() {
        this.navCtrl.setRoot(Pageone);
    }

}