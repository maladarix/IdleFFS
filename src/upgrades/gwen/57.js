class cinquantesept {

  constructor(profil) {
    this.data = {
      cost: "9B6E64A8EC60000",
      bonus: 2,
    }
    this.type = "gwen"
    this.bonusType = "cps"
    this.effect = "x2 sur gwen"
    this.cond = profil.gwen.number >= 50
    this.err = "Tu dois avoir au moins 50 gwen pour acheter cet object."
    this.id = 57
    this.name = "Double gwen (50)"
  }
}

module.exports = cinquantesept