import { Component } from '@angular/core';

import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Plant } from './../plant';



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
    var description = `Der Stein zählt zu den pflegeleichtesten Arten. Er steht am liebsten in der prallen Sonne, aber auch ein halbschattiges, schattiges oder komplett dunkles Fleckchen ist ihm recht. 
    Was die Wassergabe angeht ist er sehr genügsam. Er freut sich aber immer über eine gute Bierdusche. Damit ist dann auch das Düngen abgegolten. Eine Urlaubsvertretung suchen ist beim Stein überflüssig, egal ob Wochenendtrip, die Urlaubsreise oder Auswandern. Er wartet genügsam bis Sie wieder zurückkehren. 
    `;
    this.plants[0] = new Plant("Stein", "Stein", description, needs);
    description = `Weiße und graue Tillandsien gehören zu den Luftpflanzen und sind kinderleicht zu pflegen. Zwei mal die Woche besprühen oder tauchen - das war’s. Sie brauche nicht einmal einen Topf oder Erde. Du kannst sie an den gewünschten Platz kleben, mit einem Seil von der Decke hängen lassen oder einfach irgendwo hinlegen. Ganz wie es dir gefällt. Sie brauchen ihre Wurzeln nur, um sich festzuhalten. Wasser und Nährstoffe nehmen sie über ihre Blätter aus der Luft auf. Lediglich auf feuchte Erde solltest du sie nicht legen. 

    Dabei bevorzugen sie einen hellen, warmen Standort. 
    
    Falls du sie tauchst, solltest Du darauf achten, dass sie vollständig trocknen und kein Wasser in den Blattrosetten zurück bleibt, bevor Du sie wieder an ihren Platz bringst, da es sonst zu Schimmel führen kann. 
    
    Es gibt über 600 Tillandsien-Arten. Sicher ist auch eine Schöne für dich dabei. 
    `;
    this.plants[1] = new Plant("Tillandsien", "Tillandsien (Weiße und Graue)", description, needs); //https://www.amazon.de/Luftpflanze-Messing-Pflanzenh%C3%A4nger-moderne-Octahedron/dp/B07GK2854H
    description = `Kakteen sollten allgemein sehr hell und warm stehen. Die größte Gefahr ist es, die Kakteen zu übergießen, was zu Wurzelfäulnis und anderen Problemen führen kann. Am besten gießt man Kakteen in der Sommerzeit dann, wenn die oberste Erdschicht komplett ausgetrocknet ist. Im Winter (der Ruhezeit) gar nicht. 

    Kakteen mögen ein torffreies, humoses Substrat mit auflockernden Anteilen. Normale Blumenerde sollte nicht verwendet werden, da diese zu viel Wasser speichert und meist schon mit Dünger versetzt ist, den die Kakteen nicht vertragen. Generell brauchen Kakteen wenig Dünger und wenn, sollte dieser nur in der Wachstumszeit gegeben werden. Enthalten sollte er dabei besonders Stickstoff, Kalium und Phosphor. 
    `;
    this.plants[2] = new Plant("Kaketeen", "Kaketeen", description, needs);
    description = `Sansevierien kommen im Grunde mit allen Lichtverhältnissen zurecht. Die größte Gefahr ist es, diese Pflanzen zu übergießen. Sie sollten erst gegossen werden, wenn der gesamte Wurzelballen durchgetrocknet ist. Im Winter kann die Sansivieria daher gut und gerne 6-8 Wochen ohne Wasser auskommen. 

    Auch an ihr Substrat stellt sie keine großen Ansprüche. Du kannst Universalerde oder Kakteenerde verwenden. 
    
    Dünger braucht sie kaum, lediglich im Frühling oder Sommer, wenn die Wachstumsperiode beginnt, kann man sie etwas düngen. 
    `;
    this.plants[3] = new Plant("Sansevieria", "Sansevieria / Bogenhanf / Schwiegermutterzunge", description, needs);
    description = `Die Glücksfeder bevorzugt einen Standort abseits von praller Sonne. Aber auch die kann sie verkraften, wenn es nicht gerade den ganzen Tag bei 40°C. handelt. 

    Auch bei der Glücksfeder ist die größte Gefahr, dass sie zu viel gegossen wird. Daher sollte die Erde zwischen der Wassergabe austrocknen. 
    
    Als Substrat eignet sich Palmenerde oder eine Mischung aus Blumenerde und Tongranulat bzw. Blähton. 
    
    Gedüngt werden sollte die Glücksfeder im Sommer, während ihrer Wachstumszeit, mit handelsüblichem Grünpflanzendünger. 
    
    Glücksfedern können im Großen und Ganzen zwar zusammen mit Haustieren gehalten werden, da sie nur in großen Mengen giftig sind, dennoch sollte darauf geachtet werden, dass das überschüssige Gießwasser nicht getrunken wird. Das kann man zum Beispiel durch einen Übertopf verhindern. 
    `;
    this.plants[4] = new Plant("Zamioculcas", "Zamioculcas / Glücksfeder / ZZ-Plant", description, needs);
    description = `Efeututen stehen am liebsten halbschattig, können aber auch dunklere Standorte vertragen. Hier kann es nur passieren, dass die weißanteile mancher Unterarten vergrünen. Das schadet der Pflanze allerdings nicht. Sie kann als Hängepflanze/Ampelpflanze wachsen gelassen werden oder auch an einem Stab nach oben ranken gelassen werden. Sie mag es nur nicht besonders kalt (unter 16°C).

    Im Idealfall lässt man Efeututen nie gänzlich austrocknen, allerdings verzeihen sie auch einmal, wenn kein Wasser gegeben wird. 
    
    Die Pflanze kommt auch ohne Dünger aus, freut sich aber, wenn man sie im Sommer etwa alle zwei Wochen düngt. 
    
    Achtung: Die Epipremnum Pinnatum sollte nicht mit ihrer Verwandten, der gefleckten Efeutute (oder auch Scindapsus Pictus, Epipremnum pictum ‘Argyraeum’) verwechselt werden. Diese ist empfindlicher was den Standort an Heizungen und Temperaturschwankungen angeht. Ähnelt in der restlichen Pflege aber im wesentlichen der Epipremnum Pinnatum. 
    `;
    this.plants[5] = new Plant("Epipremnum Pinnatum", "Epipremnum Pinnatum / Efeutute", description, needs);

    description = `Die Alocasia Zebrina (auch Pfeilblatt genannt) steht am liebsten halbschattig bei einer hohen Luftfeuchtigkeit (60%+) und einer Temperatur von 15-30°C. 

    Stehen sollte sie dabei in einem luftigen und torffreien Substrat. Auch Hydrokultur ist möglich. 
    
    Beim Gießen sollte dabei darauf geachtet werden, dass keine Staunässe entsteht, die Pflanze aber auch nicht komplett austrocknet, sondern nur antrocknet. Dabei ist sie kalkempfindlich, was bedeutet, dass sie am besten mit Regenwasser gegossen wird. Destilliertes oder gefiltertes Wasser ist auch möglich. 
    
    Vermehrt werden kann die Alocasia Zebrina über Stockteilung oder aufzucht aus den Rhizomen, die sich an den Wurzeln bilden. Die Pflanze kommt ursprünglich aus Asien und kann bis zu 120cm hoch werden. 
    `;
    this.plants[6] = new Plant("Alocasia_Zebrina", "Alocasia Zebrina (Pfeilblatt)", description, needs);

    description = `Die Kentia-Palme bevorzugt einen hellen bis halbschattigen Standort, kommt aber im Grunde mit allen Lichtverhältnissen klar. Die Erde sollte vor dem nächsten Gießen angetrocknet sein, um Wurzelfäule zu vermeiden. 

    Ebenso mag sie es, gelegentlich besprüht zu werden, um die Luftfeuchtigkeit zu erhöhen. 
    
    Als Substrat bevorzugt sie Erde auf Kompostbasis, die mit etwas Blähton, Sand oder Lavagranulat vermischt ist. Da sie nur langsam wächst, muss sie allerdings nur alle 4-5 Jahre umgetopft werden. 
    
    Es reicht die Kentia-Palme im Sommer alle vier Wochen zu düngen und im Winter das Düngen einzustellen. 
    `;
    this.plants[7] = new Plant("Kentia", "Kentia-Palme", description, needs);

    description = `Die Alocasia Polly (auch Alocasia Amazonica oder Pfeilblatt genannt) steht am liebsten halbschattig bei einer hohen Luftfeuchtigkeit (60%+) und einer Temperatur von 15-30°C. 

    Stehen sollte sie dabei in einem luftigen und torffreien Substrat. Auch Hydrokultur ist möglich. 
    
    Beim Gießen sollte dabei darauf geachtet werden, dass keine Staunässe entsteht, die Pflanze aber auch nicht komplett austrocknet, sondern nur antrocknet. Dabei ist sie kalkempfindlich, was bedeutet, dass sie am besten mit Regenwasser gegossen wird. Destilliertes oder gefiltertes Wasser ist auch möglich. 
    
    Vermehrt werden kann die Alocasia Polly über Stockteilung oder aufzucht aus den Rhizomen, die sich an den Wurzeln bilden. Die Pflanze kommt ursprünglich aus Asien und kann bis zu 120cm hoch werden.  
    `;
    this.plants[8] = new Plant("Alocasia_Polly", "Alocasia Polly (Pfeilblatt)", description, needs);
    description = `Die Calathea Medaillon ist eine Unterart der Korbmaranthen. Sie Steht am liebsten halbschattig bis schattig bei einer hohen Luftfeuchtigkeit (60%+) und einer Temperatur von 18-25°C. 

    Stehen sollte sie dabei in einem fasrigen, luftdurchlässigen Substrat auf Kompostbasis. 
    
    Beim Gießen sollte dabei darauf geachtet werden, dass keine Staunässe entsteht, die Pflanze sollte dennoch immer feucht gehalten werden. Dabei ist sie kalkempfindlich, was bedeutet, dass sie am besten mit Regenwasser gegossen wird. Destilliertes oder gefiltertes Wasser ist auch möglich. 
    
    Vermehrt werden kann die Calathea über Stockteilung. Ursprünglich kommt sie aus Südamerika und kann in ihrer natürlichen Umgebung bis zu 120cm hoch werden. 
    `;
    this.plants[9] = new Plant("Calathea_Medaillon", "Calathea Medaillon (Korbmaranthe)", description, needs);
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

  getResultImage(position: number) {
    if(this.result[position] != null && this.result[position] != undefined)
      return this.result[position].id.replace(/ /g,"_");
    else
      return "default";
  }

  getResultShortDescription(position: number) {
    if(this.result[position] != null && this.result[position] != undefined)
      return this.result[position].description.substring(0, 120) + "...";
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
      this.results.set(plant, plant.getResult(this.questions));
    }

    for (let [key, value] of this.results) {
      console.log(key + ': ' + value);
    }

    this.result = [...this.results].reduce((a, e) => e[1] > a[1] ? e : a);
    console.log(this.results);

    var mapAsc = new Map([...this.results.entries()].sort());
    console.log(mapAsc);
    let keys = Array.from( mapAsc.keys() );
    keys = keys.reverse();
    console.log(keys);
    this.result = keys;

    this.nextSlide();
  }

  getPlantByName(name: string) {
    let plant = this.plants.filter(this.reduceByName(name));
    return plant;
  }

  reduceByName(name) {
    return function(value) {
      return value.name == name;
    }
  }

  goToWiki(index: number) {
    
  }

}
