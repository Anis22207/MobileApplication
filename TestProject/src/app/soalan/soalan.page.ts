import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-soalan',
  templateUrl: './soalan.page.html',
  styleUrls: ['./soalan.page.scss'],
})
export class SoalanPage {

  @ViewChild('mySlider') slides: IonSlides;

  swipeNext() {
    this.slides.slideNext();
  }
}
