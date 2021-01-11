import { Component } from '@angular/core';

import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Plant } from './plant';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonSlides, {static: false}) slides: IonSlides;

  latitude: number = 0;
  longitude: number = 0;
  lux: number = 0;
  humidity: number = 0;
  questions: number[] = [];
  plants: Plant[] = [];

  results: any = new Map<string, number>();
  result: any = new Map<string, number>();

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    //allowSlideNext: false,
  };
  constructor(private geolocation: Geolocation) {

  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
     this.latitude = resp.coords.latitude;
     this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let needs: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.plants[0] = new Plant("Stein", needs);
    this.plants[1] = new Plant("Luftpflanzen", needs); //https://www.amazon.de/Luftpflanze-Messing-Pflanzenh%C3%A4nger-moderne-Octahedron/dp/B07GK2854H
    this.plants[2] = new Plant("Kaketeen", needs);
    this.plants[3] = new Plant("Sansevieria", needs);
    this.plants[4] = new Plant("Zamioculcas", needs);
    this.plants[5] = new Plant("Epipremnum Pinnatum", needs);
    this.plants[6] = new Plant("Alocasien", needs);
  }

  nextSlide() {
    this.slides.slideNext();
  }

  setHumidity() {
    if(this.questions[1] == 2) {
      if(this.questions[5] == 0 || this.questions[4] == 0 || this.questions[3] == 0)
        this.humidity = 65;
      else if(this.questions[6] == 0)
        this.humidity = 30;
      else
        this.humidity = 40;
    }

    this.questions[2] = this.humidity;
    console.log('change humidity: ', this.questions[2]);
  }

  reset() {
  }

  getResultImage() {
    if(this.result[0] != null)
      return this.result[0].replace(/ /g,"_");
    else
      return "default";
  }

  getResult() {
    console.log('latitude: ', this.latitude);
    console.log('longitude: ', this.longitude);
    console.log('lux: ', this.lux);
    console.log('humidity: ', this.humidity);

    this.setHumidity();

    let i = 0;
    for (let question of this.questions) {
      console.log('question[' + i + ']: ' + question);
      i++;
    }

    for (let plant of this.plants) {
      this.results.set(plant.name, plant.getResult(this.questions));
    }

    for (let [key, value] of this.results) {
      console.log(key + ': ' + value);
    }

    this.result = [...this.results].reduce((a, e) => e[1] > a[1] ? e : a);
    console.log(this.result);

    this.nextSlide();
  }

}
