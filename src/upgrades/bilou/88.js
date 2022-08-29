class quatrevinghuit {

  constructor(profil) {
    this.data = {
      cost: "C1DED63574DE0E4660000000",
      bonus: 5,
    }
    this.type = "dieu"
    this.bonusType = "cps"
    this.effect = "x5 sur dieu bilou"
    this.cond = profil.dieu.number >= 100
    this.err = "Tu dois avoir au moins 100 dieu bilou pour acheter cet object."
    this.id = 88
    this.name = "x5 sur dieu bilou (100)"
  }
}

module.exports = quatrevinghuit