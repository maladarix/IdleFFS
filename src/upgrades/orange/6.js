class six {

  constructor(profil) {
    this.data = {
      cost: "1388",
      bonus: 2,
    }
    this.type = "orange"
    this.bonusType = "cps"
    this.effect = "x2 sur Orange glo"
    this.cond = profil.orange.number >= 10
    this.err = "Tu dois avoir au moins 10 Orange glo pour acheter cet object."
    this.id = 6
    this.name = "Double Orange glo"
  }
}

module.exports = six