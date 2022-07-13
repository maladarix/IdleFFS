class huit {

  constructor(profil) {
    this.data = {
      cost: "1DCD6500",
      bonus: 5,
    }
    this.type = "orange"
    this.bonusType = "cps"
    this.effect = "x5 sur Orange glo"
    this.cond = profil.orange.number >= 100
    this.err = "Tu dois avoir au moins 100 Orange glo pour acheter cet object."
    this.id = 8
    this.name = "x5 sur Orange glo"
  }
}

module.exports = huit