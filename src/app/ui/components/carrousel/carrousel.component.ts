import { Component, Input } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [SlickCarouselModule, MatCheckboxModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.sass'
})
export class CarrouselComponent {
  slideConfig: any = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  @Input({ required: true }) inputSlides = [
    {
      nameProduct: '',
      numberProduct: '',
      detaildProduct: '',
      balanceProduct: ''
    }
  ];
  slides = [
    {
      nameProduct: '',
      numberProduct: '',
      detaildProduct: '',
      balanceProduct: ''
    }
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.slideConfig.slidesToScroll = this.inputSlides.length - 1
  }



  slickInit(e: any) { }

  breakpoint(e: any) { }

  afterChange(e: any) { }

  beforeChange(e: any) { }
}
