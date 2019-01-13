import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html'
})
export class CarouselHolderComponent implements OnInit {
  customOptions: any = {
    autoplay: true,
    autoWidth: false,
    nav: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ["<i class='fas fa-angle-left'>", "<i class='fas fa-angle-right'>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
