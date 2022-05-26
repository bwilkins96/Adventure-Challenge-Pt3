const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
    this.cooldown = 30000;
    this.count = 0;
    this.attackTarget = null;

    setTimeout(this.act, this.cooldown)
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    if (this.name === 'Bailey') {return}

    let room = this.currentRoom;
    let exitsArr = room.getExits();
    let randomIdx = Math.floor(Math.random() * (exitsArr.length))
    let direction = exitsArr[randomIdx];

    let newRoom = room.getRoomInDirection(direction);
    this.currentRoom = newRoom;

    console.log(`${this.name} moved to ${newRoom.name}`)
  }

  attack = () => {
    let person = this.attackTarget;
    console.log(`${this.name} attacks ${person.name}`)
    person.applyDamage(10);
  }

  act = () => {
    if (this.health <= 0) { return }
      // Dead, do nothing;

    if (this.attackTarget === null) {}
    else if (this.attackTarget.currentRoom === this.currentRoom) {
      this.attack();
      }

    this.scratchNose();

    if (this.count === 5) {
      this.randomMove();
      this.count = 0;
    }

    this.count++;
    this.cooldown = 30000;
    setTimeout(this.act, this.cooldown);
  }



  scratchNose = () => {
    if (this.name !== 'goblin') {return}

    console.log(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
