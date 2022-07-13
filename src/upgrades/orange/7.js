class sept {

  constructor(profil) {
    this.data = {
      cost: 5000000,
      bonus: 2,
    }
    this.type = "orange"
    this.bonusType = "cps"
    this.effect = "x2 sur Orange glo"
    this.cond = profil.orange.number >= 50
    this.err = "Tu dois avoir au moins 50 Orange glo pour acheter cet object."
    this.id = 7
    this.name = "Double Orange glo (2e)"
  }
}

module.exports = sept