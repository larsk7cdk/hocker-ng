import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageLinkComponent } from './components/image-link/image-link.component';

@NgModule({
    declarations: [CarouselComponent, ImageLinkComponent],
    imports: [CommonModule, NgbModule],
    exports: [CarouselComponent, ImageLinkComponent],
})
export class SharedModule {}
