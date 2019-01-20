import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-image-link',
    templateUrl: './image-link.component.html',
    styleUrls: ['./image-link.component.scss'],
})
export class ImageLinkComponent implements OnInit {
    @Input() Image;

    ngOnInit() {}
}
