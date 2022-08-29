class quatrevingneuf {

  constructor(profil) {
    this.data = {
      cost: "127D2A59B51735488223C00000000",
      bonus: 0.5,
    }
    this.type = "dieu"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de dieu bilou"
    this.cond = profil.dieu.number >= 200
    this.err = "Tu dois avoir au moins 200 dieu bilou pour acheter cet object."
    this.id = 89
    this.name = "Plus de dieu bilou? (200)"
  }
}

module.exports = quatrevingneuf