export class Plant {
  public id: string;
  public name: string;
  public description: string;
  public needs: number[];

  constructor(id: string, name: string, description: string, needs: number[]){
    this.id = id;
    this.name = name;
    this.description = description;
    this.needs = needs;
  }

  getResult(questions: number[]) {
    let result = 0;

    if(this.name == "Stein")
      if(questions[0]==5)
        if(questions[2]<= 30) /// Luftfeuchtigkeit
          if(questions[7] == 0)
            if(questions[9] == 0)
              if(questions[10] == 1)
                result = 50;

    if(this.name == "Tillandsien (Weiße und Graue)")
      if(questions[0] == 0)
        if(questions[7] == 0)
          result = 20;

    if(this.name == "Kaketeen")
      if(questions[0] == 0)
        if(questions[7] == 0)
          result = 20;

    if(this.name == "Sansevieria / Bogenhanf / Schwiegermutterzunge")
      result = 1;

    if(this.name == "Zamioculcas / Glücksfeder / ZZ-Plant")
      result = 1;

    if(this.name == "Epipremnum Pinnatum / Efeutute")
      if(questions[10] == 2)
        result = 10;

    if(this.name == "Alocasia Zebrina (Pfeilblatt)")
      if(questions[0] == 3)
        if(questions[7] == 2)
          if(questions[2] >= 60)
            if(questions[9] == 1)
              if(questions[8] < 2)
                if(questions[10] == 2)
                  result = 70;

    if(this.name == "Alocasia Polly (Pfeilblatt)")
      if(questions[0] == 3)
        if(questions[7] == 2)
          if(questions[2] >= 60)
            if(questions[9] == 1)
              if(questions[8] < 2)
                if(questions[10] == 2)
                  result = 70;

    if(this.name == "Kentia-Palme")
      if(questions[0] != 5)
        result=2;
    // Egal welche Kombination angeklickt wird (nur nicht “nie Licht”): 

    if(this.id == "Calathea_Medaillon")
      if(questions[0] == 3)
        if(questions[7] == 2)
          if(questions[2] >= 60)
            if(questions[9] == 1)
              if(questions[8] < 2)
                if(questions[10] == 2)
                  result = 70;

    return result;
  }
}
