const { Enemy } = require('./enemy');

class Bailey extends Enemy {
    constructor(name = "Bailey", description, startingRoom ) {
        super (name, description, startingRoom);
        this.name = "Bailey";
        this.health = 1000;
        this.friend = false;
        this.strength = 100;
    }

    act = () => {return}

    attack = () => {
        let person = this.attackTarget;
        console.log(`${this.name} attacks ${person.name}`)
        person.applyDamage(100);
      }

}

module.exports = Bailey;
