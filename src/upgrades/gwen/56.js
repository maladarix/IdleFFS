class cinquantesix  {

  constructor(profil) {
    this.data = {
      cost: "5543DF729C000",
      bonus: 2,
    }
    this.type = "gwen"
    this.bonusType = "cps"
    this.effect = "x2 sur gwen"
    this.cond = profil.gwen.number >= 10
    this.err = "Tu dois avoir au moins 10 gwen pour acheter cet object."
    this.id = 56
    this.name = "Double gwen (10)"
  }
}

module.exports = cinquantesix