export class Player {
  constructor(name, level) {
    this.name = name; 
    this.level = level; 
  }

  info() {
    console.log(`${this.name} ha alcanzado el nivel ${this.level}!`);
  }

  levelUp() {
    this.level += 1;
    console.log(`${this.name} ha subido al nivel ${this.level}!`);
  }
}