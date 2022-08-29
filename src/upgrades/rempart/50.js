class cinquante {

  constructor(profil) {
    this.data = {
      cost: "4838ED6E6B62A8233C5BA600000000",
      bonus: 0.5,
    }
    this.type = "remparts"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de remparts"
    this.cond = profil.remparts.number >= 400
    this.err = "Tu dois avoir au moins 400 remparts pour acheter cet object."
    this.id = 50
    this.name = "Plus de remparts? (400)"
  }
}

module.exports = cinquante