import { Component, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-set3',
  templateUrl: './set3.page.html',
  styleUrls: ['./set3.page.scss'],
})
export class Set3Page {

    @ViewChild('mySlider') slides: IonSlides;
  
    swipeNext() {
      this.slides.slideNext();
    }
  
    constructor(private alertCtrl: AlertController) { }

    async correctAnswer(){
      await this.alertCtrl.create({
      header: "Tahniah!",
      subHeader:"Jawapan anda betul.",
      // inputs: [
      //   { type: 'text', name:'promo', placeholder: "Promo code"}
      // ],
      buttons:[
      //   { text: "Next", handler: (res) => {
      //      console.log(res.promo);
      //   } 
      // },
      {
        text: "Okay"
      }
      ]
      }).then(res => res.present());
  }
  
  // question21
  async wrongAnswer21(){
  await this.alertCtrl.create({
  header: "Belajar bab ini!",
  subHeader:"Jawapan Betul B",
  
  // inputs: [
  //   { type: 'text', name:'promo', placeholder: "Promo code"}
  // ],
  buttons:[
  //   { text: "Next", handler: (res) => {
  //      console.log(res.promo);
  //   } 
  // },
  {
    text: "Okay"
  }
  ]
  }).then(res => res.present());
  }
  
  // question22
  async wrongAnswer22(){
  await this.alertCtrl.create({
  header: "Belajar bab ini!",
  subHeader:"Jawapan Betul : C",
  
  // inputs: [
  //   { type: 'text', name:'promo', placeholder: "Promo code"}
  // ],
  buttons:[
  //   { text: "Next", handler: (res) => {
  //      console.log(res.promo);
  //   } 
  // },
  {
  text: "Okay"
  }
  ]
  }).then(res => res.present());
  }
  
  // question23
  async wrongAnswer23(){
  await this.alertCtrl.create({
  header: "Belajar bab ini!",
  subHeader:"Jawapan Betul : A",
  
  // inputs: [
  //   { type: 'text', name:'promo', placeholder: "Promo code"}
  // ],
  buttons:[
  //   { text: "Next", handler: (res) => {
  //      console.log(res.promo);
  //   } 
  // },
  {
  text: "Okay"
  }
  ]
  }).then(res => res.present());
  }
  
  // question24
  async wrongAnswer24(){
  await this.alertCtrl.create({
  header: "Belajar bab ini!",
  subHeader:"Jawapan Betul : C",
  
  // inputs: [
  //   { type: 'text', name:'promo', placeholder: "Promo code"}
  // ],
  buttons:[
  //   { text: "Next", handler: (res) => {
  //      console.log(res.promo);
  //   } 
  // },
  {
  text: "Okay"
  }
  ]
  }).then(res => res.present());
  }
  
  // question25
  async wrongAnswer25(){
  await this.alertCtrl.create({
  header: "Belajar bab ini!",
  subHeader:"Jawapan Betul : B",
  
  // inputs: [
  //   { type: 'text', name:'promo', placeholder: "Promo code"}
  // ],
  buttons:[
  //   { text: "Next", handler: (res) => {
  //      console.log(res.promo);
  //   } 
  // },
  {
  text: "Okay"
  }
  ]
  }).then(res => res.present());
  }
  
  // question26
  async wrongAnswer26(){
  await this.alertCtrl.create({
  header: "Belajar bab ini!",
  subHeader:"Jawapan Betul : A",
  
  // inputs: [
  //   { type: 'text', name:'promo', placeholder: "Promo code"}
  // ],
  buttons:[
  //   { text: "Next", handler: (res) => {
  //      console.log(res.promo);
  //   } 
  // },
  {
    text: "Okay"
  }
  ]
  }).then(res => res.present());
  }
  
  // question27
  async wrongAnswer27(){
  await this.alertCtrl.create({
  header: "Belajar bab ini!",
  subHeader:"Jawapan Betul : A",
  
  // inputs: [
  //   { type: 'text', name:'promo', placeholder: "Promo code"}
  // ],
  buttons:[
  //   { text: "Next", handler: (res) => {
  //      console.log(res.promo);
  //   } 
  // },
  {
  text: "Okay"
  }
  ]
  }).then(res => res.present());
  }
  
  // question28
  async wrongAnswer28(){
  await this.alertCtrl.create({
  header: "Belajar bab ini!",
  subHeader:"Jawapan Betul : C",
  
  // inputs: [
  //   { type: 'text', name:'promo', placeholder: "Promo code"}
  // ],
  buttons:[
  //   { text: "Next", handler: (res) => {
  //      console.log(res.promo);
  //   } 
  // },
  {
  text: "Okay"
  }
  ]
  }).then(res => res.present());
  }
  
  // question29
  async wrongAnswer29(){
  await this.alertCtrl.create({
  header: "Belajar bab ini!",
  subHeader:"Jawapan Betul : B",
  
  // inputs: [
  //   { type: 'text', name:'promo', placeholder: "Promo code"}
  // ],
  buttons:[
  //   { text: "Next", handler: (res) => {
  //      console.log(res.promo);
  //   } 
  // },
  {
  text: "Okay"
  }
  ]
  }).then(res => res.present());
  }
  
  // question30
  async wrongAnswer30(){
  await this.alertCtrl.create({
  header: "Belajar bab ini!",
  subHeader:"Jawapan Betul : D",
  
  // inputs: [
  //   { type: 'text', name:'promo', placeholder: "Promo code"}
  // ],
  buttons:[
  //   { text: "Next", handler: (res) => {
  //      console.log(res.promo);
  //   } 
  // },
  {
  text: "Okay"
  }
  ]
  }).then(res => res.present());
  }
  
  //submit
  // question20
  async submit(){
  await this.alertCtrl.create({
  header: "Terima Kasih!",
  subHeader:"Anda melakukan tugas yang hebat dalam menjawab latihan ini.",
  
  // inputs: [
  //   { type: 'text', name:'promo', placeholder: "Promo code"}
  // ],
  buttons:[
  //   { text: "Next", handler: (res) => {
  //      console.log(res.promo);
  //   } 
  // },
  {
  text: "Okay"
  }
  ]
  }).then(res => res.present());
  }
  
  }