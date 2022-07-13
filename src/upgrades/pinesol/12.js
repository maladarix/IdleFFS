class douze {

  constructor(profil) {
    this.data = {
      cost: 55000000,
      bonus: 2,
    }
    this.type = "pine"
    this.bonusType = "cps"
    this.effect = "x2 sur Pine sol"
    this.cond = profil.pine.number >= 50
    this.err = "Tu dois avoir au moins 50 Pine Sol pour acheter cet object."
    this.id = 12
    this.name = "Double Pine sol (50)"
  }
}

module.exports = douze