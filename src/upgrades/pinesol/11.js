class onze {

  constructor(profil) {
    this.data = {
      cost: 75000,
      bonus: 2,
    }
    this.type = "pine"
    this.bonusType = "cps"
    this.effect = "x2 sur Pine sol"
    this.cond = profil.pine.number >= 10
    this.err = "Tu dois avoir au moins 10 Pine Sol pour acheter cet object."
    this.id = 11
    this.name = "Double Pine sol (10)"
  }
}

module.exports = onze