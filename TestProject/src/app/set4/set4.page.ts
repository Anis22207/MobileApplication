import { Component, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-set4',
  templateUrl: './set4.page.html',
  styleUrls: ['./set4.page.scss'],
})
export class Set4Page{

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

// question31
async wrongAnswer31(){
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

// question32
async wrongAnswer32(){
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

// question33
async wrongAnswer33(){
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

// question34
async wrongAnswer34(){
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

// question35
async wrongAnswer35(){
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

// question36
async wrongAnswer36(){
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

// question37
async wrongAnswer37(){
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

// question38
async wrongAnswer38(){
await this.alertCtrl.create({
header: "Study this one!",
subHeader:"Correct answer : C",

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

// question39
async wrongAnswer39(){
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

// question40
async wrongAnswer40(){
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

//submit
// question20
async submit(){
await this.alertCtrl.create({
header: "Terima Kasih!",
subHeader:"Anda melakukan tugas yang hebat dalam menjawab kuiz ini.",

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

