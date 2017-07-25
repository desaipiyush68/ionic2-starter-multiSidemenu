import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';


@Component({
    selector: 'page-pageone',
    templateUrl: 'pageone.html'
})


export class Pageone {

    constructor(
        public navCtrl: NavController,
        public menu: MenuController) {
        menu.enable(false, 'HomePage');
        menu.enable(false, 'Pagetwo');
        menu.enable(false, 'ContactPage');
        menu.enable(false, 'AboutPage');
        menu.enable(true, 'Pageone');
        
    }

    PageAbout() {
        this.navCtrl.setRoot(AboutPage);
    }

    PageHome() {
        this.navCtrl.setRoot(HomePage);
    }

}