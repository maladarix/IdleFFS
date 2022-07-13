class treize {

  constructor(profil) {
    this.data = {
      cost: 5500000000,
      bonus: 5,
    }
    this.type = "pine"
    this.bonusType = "cps"
    this.effect = "x5 sur Pine sol"
    this.cond = profil.pine.number >= 100
    this.err = "Tu dois avoir au moins 100 Pine sol pour acheter cet object."
    this.id = 13
    this.name = "x5 sur Pine sol (100)"
  }
}

module.exports = treize