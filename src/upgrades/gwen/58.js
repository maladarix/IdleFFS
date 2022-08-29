class cinquantehuit {

  constructor(profil) {
    this.data = {
      cost: "3CB71F51FC5580000",
      bonus: 5,
    }
    this.type = "gwen"
    this.bonusType = "cps"
    this.effect = "x5 sur gwen"
    this.cond = profil.gwen.number >= 100
    this.err = "Tu dois avoir au moins 100 gwen pour acheter cet object."
    this.id = 58
    this.name = "x5 sur gwen (100)"
  }
}

module.exports = cinquantehuit