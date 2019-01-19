import { Component, OnInit } from '@angular/core';

// @ts-ignore
import images_json from 'src/assets/carousel_images/images.json';

@Component({
    selector: 'app-home-form',
    templateUrl: './home-form.component.html',
    styleUrls: ['./home-form.component.scss'],
})
export class HomeFormComponent implements OnInit {
    images: string[] = [];

    constructor() {}

    ngOnInit() {
        this.images = images_json.images;
    }
}
