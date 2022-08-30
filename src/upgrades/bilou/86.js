class quatrevingsix  {

  constructor(profil) {
    this.data = {
      cost: "FE1C215E8F838E000000",
      bonus: 2,
    }
    this.type = "dieu"
    this.bonusType = "cps"
    this.effect = "x2 sur dieu bilou"
    this.cond = profil.dieu.number >= 10
    this.err = "Tu dois avoir au moins 10 dieu bilou pour acheter cet object."
    this.id = 86
    this.name = "Double dieu bilou (10)"
  }
}

module.exports = quatrevingsix