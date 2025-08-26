export class Player {
  constructor(name,level) {
    this.name = name;
    this.level = level;
  }

  info(){
    console.log(`${this.name} ha subido al nivel ${this.level}`)
  }
}