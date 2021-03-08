import { Component, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-set1',
  templateUrl: './set1.page.html',
  styleUrls: ['./set1.page.scss'],
})
export class Set1Page{

  @ViewChild('mySlider') slides: IonSlides;

  swipeNext() {
    this.slides.slideNext();
  }

  constructor(private alertCtrl: AlertController) {}

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

// question1
async wrongAnswer(){
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

// question2
async wrongAnswer2(){
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

// question3
async wrongAnswer3(){
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

// question4
async wrongAnswer4(){
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

// question5
async wrongAnswer5(){
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

// question6
async wrongAnswer6(){
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

// question7
async wrongAnswer7(){
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

// question8
async wrongAnswer8(){
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

// question9
async wrongAnswer9(){
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

// question10
async wrongAnswer10(){
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

//submit
// question10
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
