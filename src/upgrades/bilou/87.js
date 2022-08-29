class quatrevingsept {

  constructor(profil) {
    this.data = {
      cost: "1F04EF12CB04CF158000000",
      bonus: 2,
    }
    this.type = "dieu"
    this.bonusType = "cps"
    this.effect = "x2 sur dieu bilou"
    this.cond = profil.dieu.number >= 50
    this.err = "Tu dois avoir au moins 50 dieu bilou pour acheter cet object."
    this.id = 87
    this.name = "Double dieu bilou (50)"
  }
}

module.exports = quatrevingsept