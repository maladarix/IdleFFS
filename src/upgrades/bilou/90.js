class quatrevingdix {

  constructor(profil) {
    this.data = {
      cost: "A827E389F936A4531FC85829C1D800000000000",
      bonus: 0.5,
    }
    this.type = "dieu"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de dieu bilou"
    this.cond = profil.dieu.number >= 400
    this.err = "Tu dois avoir au moins 400 dieu bilou pour acheter cet object."
    this.id = 90
    this.name = "Plus de dieu bilou? (400)"
  }
}

module.exports = quatrevingdix