import { Component, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-set2',
  templateUrl: './set2.page.html',
  styleUrls: ['./set2.page.scss'],
})
export class Set2Page{

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

// question11
async wrongAnswer11(){
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

// question12
async wrongAnswer12(){
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

// question13
async wrongAnswer13(){
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

// question14
async wrongAnswer14(){
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

// question15
async wrongAnswer15(){
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

// question16
async wrongAnswer16(){
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

// question17
async wrongAnswer17(){
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

// question18
async wrongAnswer18(){
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

// question19
async wrongAnswer19(){
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

// question20
async wrongAnswer20(){
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
