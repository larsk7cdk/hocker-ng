import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {
    @Input() Images: [];

    constructor(config: NgbCarouselConfig) {
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }

    ngOnInit() {}
}
