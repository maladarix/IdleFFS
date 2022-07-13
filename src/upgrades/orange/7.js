class sept {

  constructor(profil) {
    this.data = {
      cost: "4C4B40",
      bonus: 2,
    }
    this.type = "orange"
    this.bonusType = "cps"
    this.effect = "x2 sur Orange glo"
    this.cond = profil.orange.number >= 50
    this.err = "Tu dois avoir au moins 50 Orange glo pour acheter cet object."
    this.id = 7
    this.name = "Double Orange glo (50)"
  }
}

module.exports = sept